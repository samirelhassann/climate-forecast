# Weather Forecast

A Weather forecast app built using React + Nextjs + Tailwind

The application obtains latitude and longitude via the browser and makes requests via API to obtain the temperature of the current location.

For cost reasons, only the current temperature functionality is being obtained via api, since the other functionalities require a payment plan.

## Demo


## Language and Tools

<p align="left"> <a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/> </a>  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## Additional Libraries

- fastify
- prisma
- zod
- vitest

## Prerequisites

Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/en) `>= 18.x`
- [yarn](https://yarnpkg.com/) - The version used in this project was `1.22.21`


## Instalation

Follow these steps to install the project:

1. Clone the project
```bash
git clone https://github.com/samirelhassann/weather-forecast.git
```

2. Navigate into the project directory:
```bash
cd weather-forecast
```

3. Install the project dependencies:
```bash
yarn install
```

## Configuration

Before running the project, you need to set up your environment:

1. Create a account on [Open Weather](https://openweathermap.org/) and generate an api key following this steps: https://openweathermap.org/appid

2. Copy the .env.example file to .env:
```bash
cp .env.example .env
```

3. Paste the api key generated on Open Weather

## Usage

1. Start the application
```bash
yarn dev
```

The application will run on route [`http://localhost:3000/`](http://localhost:3000/).
