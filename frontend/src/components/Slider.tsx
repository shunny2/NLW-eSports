import React, { ReactNode, useEffect, useState } from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

interface SliderProps {
    children?: ReactNode;
}

export function Slider(props: SliderProps) {
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
        slides: {
            perView: 5,
            spacing: 15,
        }
    })

    return (
        <>
            <div className="relative">
                <div ref={sliderRef} className="keen-slider">

                        {props.children}
 
                        {/* <div className="keen-slider__slide flex bg-white items-center justify-center h-72 max-h-full px-14"></div>
                            <div className="keen-slider__slide flex bg-gray-400 items-center justify-center h-72 max-h-full px-14">2</div>
                            <div className="keen-slider__slide flex bg-violet-400 items-center justify-center h-72 max-h-full px-14">3</div>
                            <div className="keen-slider__slide flex bg-emerald-400 items-center justify-center h-72 max-h-full px-14">4</div>
                            <div className="keen-slider__slide flex bg-zinc-400 items-center justify-center h-72 max-h-full px-14">5</div>
                            <div className="keen-slider__slide flex bg-zinc-400 items-center justify-center h-72 max-h-full px-14">6</div> */}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>
        </>
    )
}

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " fill-slate-500/25" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`w-8 h-8 absolute top-[50%] -translate-y-[50%] fill-white cursor-pointer ${props.left ? "left-[5px]" : "left-auto right-[5px]"
                } ${disabeld}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}