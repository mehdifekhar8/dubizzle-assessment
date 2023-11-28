# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Project Features and Performance Optimizations 

### Debouncing the `handleLoadMore` Function

#### Purpose:
Prevent unnecessary API requests and reduce server load by delaying the execution of the `handleLoadMore` function until a certain period of inactivity. This is especially useful when users may trigger multiple consecutive "Load More" clicks quickly.

### Lazy Loading Images

#### Purpose:
Improve page load performance by deferring the loading of images that are not immediately visible on the screen. This can significantly reduce initial page load times, especially when there are many images to load.

### Optimizing the API Call

#### Purpose:
Minimize the amount of data fetched from the server by requesting only the essential fields needed for rendering the news list. Reducing unnecessary data transfer improves the speed of the API call and decreases the time it takes for the client to process the response.

### Implementing Pagination

#### Purpose:
Load and display a limited number of articles per page, allowing users to navigate through the content more efficiently. This helps manage the amount of data transferred between the client and server, improving performance and user experience. Pagination ensures that only a subset of articles is retrieved and rendered at a time, preventing the need to load the entire dataset at once.


