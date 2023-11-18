# Schiphol Frontend Assignment

<a href="https://gitmoji.dev">
  <img
    src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square"
    alt="Gitmoji"
  />
</a>

This is a frontend assignment for Schiphol. It is a simple web application that displays a list of flights and allows the user to filter the list by flight number.

[The latest deployed version can be found here](https://schiphol-frontend-assignment.app.leunix.nl).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start developing.

[Prettier](https://prettier.io/) is used to format the code. With the use of [husky](https://typicode.github.io/husky/#/), the code will be formatted automatically on commit.

## Environment variables

The following environment variables can be set to configure the application:

- NEXT_PUBLIC_FLIGHTS_URL
  - This URL will be used to retrieve the flights data. If none is set, the application will use the default `/flights.json` URL.
- NEXT_PUBLIC_STORYBOOK_URL
  - If set, this will display a storybook logo on the top left of the application with a link to the storybook page.

## Storybook

Storybook is used to develop and test components in isolation. To run storybook:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view the storybook.

## Testing

Unit tests are available for the utility functions, using Jest. To run the tests:

```bash
npm run test
```

## Docker

The project can be run in a docker container. To build the image:

```bash
docker build -t schiphol-frontend-assignment .
```

To run the container:

```bash
docker run -p 80:80 schiphol-frontend-assignment
```

The image will have both the project and Storybook available. Open [http://localhost](http://localhost) to view the application, and [http://localhost/storybook/index.html](http://localhost/storybook/index.html) for storybook.

## Notable dependencies

- [Next.js](https://nextjs.org/) - Framework
- [Storybook](https://storybook.js.org/) - Component development and documentation
- [Prettier](prettier.io) - Code format
- [Jest](https://jestjs.io/) - Unit testing
- [SWR](https://swr.vercel.app/) - Data fetching
- [@mui/icons-material](https://mui.com/material-ui/material-icons/) - Icons
