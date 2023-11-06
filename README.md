# Flood Monitoring App

## Features

- Search for a measurement station using the station's name.
- Display real-time data readings for the selected station.
- Visualize data trends with a line chart.
- View a table of readings over the last 24 hours.

## Technologies Used

- **React**: The core framework for building the web application.
- **Material-UI**: A popular UI framework for creating modern and responsive user interfaces.
- **Recharts**: A charting library for creating interactive and customizable charts.
- **Axios**: A promise-based HTTP client for making network requests.
- **TypeScript**: A statically-typed superset of JavaScript that enhances code quality.
- **Debouncing**: Used for optimizing input search to reduce the number of API requests.

## Components

The application is divided into several components:

1. **App.tsx**: The main application component that manages the state and fetches data from the API.
2. **Search.tsx**: A search component for finding and selecting measurement stations.
3. **Graph.tsx**: A component responsible for rendering line charts based on real-time readings.
4. **Table.tsx**: A component that displays a table of readings for the last 24 hours.

## Setting Up and Running the App

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Start the application using `npm start`.

## Usage

1. Open the application in your web browser.
2. Use the search bar to find a measurement station by name.
3. Select a station from the search results.
4. The application will display real-time readings for the selected station.
5. You can also view data trends in the form of line charts and a table of readings for the last 24 hours.

## Author

Javokhirkhon Sharipkhonov
