Entry test submission for Arent Test, powered by ReactJS, tailwindcss, Vite

## Requirements

- NodeJS 16+ (latest LTS, which should be 18 by now, is recommended)

## Tools used

- [TailwindCss](https://tailwindcss.com/)
- [ReactJS](https://nextjs.org/)

## Getting Started

Install the dependencies:

```bash
npm i
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) with your browser to see the result.

To build the production app:

```bash
npm run build
```

## The quirks

### 1. Problems

Arent3d's evaluation is straightforward, but there is a significant number of issues to address. The project needs to:

- Align with the design specifications (e.g., color schemes, font families, etc.).
- Incorporate three distinct screens, each featuring unique components.
- Simulate real-world scenarios, including features like click-to-scroll, data filtering, and data fetching.
- Include charts, specifically Line Charts, that display data with filtering options.

### 2. The solution(s):

- I decided to use TailwindCSS to develop the feature as quickly as possible.
- I used the Highcharts library to create the charts.
- I chose Vite to bundle the project because it is very fast and easy to configure.

## Project structure

- `components`: Contains components that are specific to certain screens.
- `hooks`: Contains hooks that are handle logic for components
- `pages`: Contains page screen  
- `utils`: Contains utility files, for testing, for data transforming,...
