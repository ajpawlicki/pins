# Pins
Infinite pins.<br>

## Getting Started
### Installing Dependencies
In your root directory run, `npm install`.

### Development
* In your root directory run, `npm run server-dev`.
* Then run, `npm run react-dev`.
* Go to `localhost:5000` in your browser to use app.

## Features
* When user scrolls to bottom of list component, client will make get request to server for additional pins.
* Loader at bottom of page indicates that client is requesting more pins.
* When there are no more additional pins to render from server, client will discontinue get request and user will no longer be able to scroll further.
* User can hover over pins to highlight them.
* User can click on pins to visit the original link.

## Notes
Built with React, Webpack, and Bootstrap.