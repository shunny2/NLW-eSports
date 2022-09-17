import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { CreateAdModal } from './components/CreateAdModal';
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react';
import { CaretLeft, CaretRight } from 'phosphor-react';

import "keen-slider/keen-slider.min.css";
import './styles/main.css';

import * as Dialog from '@radix-ui/react-dialog';
import logo from './assets/logo-nlw-esports.svg';
import axios from 'axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [sildeOptions, setSlideOptions] = useState<KeenSliderOptions>({});
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(sildeOptions);

  useEffect(() => {
    axios('http://localhost:3000/games')
      .then(response => {
        setGames(response.data);
      })
      .then(() => {
        setSlideOptions({
          initial: 0,
          slideChanged: (slider) => {
            setCurrentSlide(slider.track.details.rel);
          },
          slides: {
            perView: 5,
            spacing: 16,
          }
        })
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="logo" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui.
      </h1>
      
      <div ref={sliderRef} className='relative mt-16 rounded-lg keen-slider'>
        <button
          disabled={currentSlide === 0}
          className='absolute rounded-full p-2 text-zinc-400 z-[1] left-2 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/50 backdrop-blur disabled:opacity-0'
          onClick={() => instanceRef.current?.prev()}
        >
          <CaretLeft className='w-8 h-8' />
        </button>

        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}

        <button
          disabled={currentSlide === games.length - 5}
          className='absolute rounded-full p-2 text-zinc-400 z-[1] right-2 top-1/2 -translate-y-1/2 bg-black/25 hover:bg-black/50 backdrop-blur disabled:opacity-0'
          onClick={() => instanceRef.current?.next()}
        >
          <CaretRight className='w-8 h-8' />
        </button>

      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App;