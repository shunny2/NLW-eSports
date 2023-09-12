<p align="center">
 <a href="#about-application">About Application</a>
 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#technologies">Technologies</a>
 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#how-to-run">How to run</a>
 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#figma">Figma</a>
 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#project-status">Project Status</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#license">License</a>
</p>

</br>

![nlw](https://user-images.githubusercontent.com/72872854/191334230-85eb3cf3-221d-4c82-8f46-a0a60fba16e7.png)

<p align="center">
 <a href="https://img.shields.io/github/stars/shunny2/nlw-esports?style=social"><img src="https://img.shields.io/github/stars/shunny2/nlw-esports?style=social" alt="Repo Stars"/></a>
 <a href="https://img.shields.io/github/forks/shunny2/nlw-esports?style=social"><img src="https://img.shields.io/github/forks/shunny2/nlw-esports?style=social" alt="Repo Forks"/></a>
 <a href="https://img.shields.io/github/license/shunny2/nlw-esports?style=social"><img src="https://img.shields.io/github/license/shunny2/nlw-esports?style=social" alt="License"/></a>
</p>

## About Application

<b>NLW-eSports</b> is a project that helps people find someone to play their favorite game. The project was created at the Next Level Week event by [Rocketseat](https://www.rocketseat.com.br/).

## Technologies

### Frontend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://reactjs.org/" title="React"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React logo image." /></a>
    </td>
    <td>
      <a href="https://tailwindcss.com/" title="Tailwindcss"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" alt="Tailwindcss logo image." /></a>
    </td>
  </tbody>
</table>

### Backend

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://nodejs.org/en/" title="NodeJS"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="Node.js logo image." /></a>
    </td>
    <td>
      <a href="https://expressjs.com/" title="Express"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" alt="Express javascript logo image." /></a>
    </td>
    <td>
      <a href="https://www.prisma.io/" title="Prisma ORM"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" alt="Prisma ORM logo image." /></a>
    </td>
  </tbody>
</table>

### Infrastructure and Database

<table>
  <thead>
  </thead>
  <tbody>
    <td>
      <a href="https://www.docker.com/" title="Docker"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/docker-3.svg" alt="Docker logo image." /></a>
    </td>
    <td>
      <a href="https://www.postgresql.org/" title="PostgreSQL"><img width="128" height="128" src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" alt="PostgreSQL logo image." /></a>
    </td>
  </tbody>
</table>

## How to run

First, start by cloning the repository:
```shell
git clone https://github.com/shunny2/nlw-esports
```

If you use docker, run the following command in the project root directory to run the frontend container.
```bash
docker-compose up -d
```

Interact with the docker container:
```bash
docker exec -it frontend /bin/bash
```

Finally, run the project with the command:
```bash
npm run dev
```

With the front end running, now let's start the backend. Access the backend folder with the command:
```shell
 cd backend
```

Inside the folder, run the command below to build the backend image.
```bash
docker-compose up -d --build
```

Okay. Your backend is already running.

Now we have to start the prism.

```bash
docker exec -it prisma-studio bash
```

Inside the prism container, run:
```bash
npx prisma generate
```

And finally, start prism studio:
```bash
npx prisma studio
```

### Routes

Your page is available at the URL: [http://localhost:8000/](http://localhost:8000/)\
Your server is available at the URL: [http://localhost:3000/](http://localhost:3000/)\
Prism is available at the URL: [http://localhost:5555/](http://localhost:5555/)

## Figma
See the project prototype in [figma](https://www.figma.com/file/wl7FuCQ0MmWvWEGp5wKqhk/NLW-eSports-(Community)?node-id=6%3A23).

## Project Status

> Status: Completed.

## License

This project is under an [MIT](https://opensource.org/licenses/MIT) license.

<hr></hr>

<p align="center">Created by <a href="https://github.com/shunny2"><b>Alexander Davis</b><a/>.</p>
