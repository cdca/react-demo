# React demo app to call several APIs

This is demo app that calls several APIs.  
This app uses styled components.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# How it works

This app has 4 pages. Home page is standard website page. Other three pages are Images, Map and Joke. They call several APIs do get some data, then to display it on screen.

## Flickr API

Flickr API is used to show image search results. You can click on image to show larger image (overlay) then click again to close it. You can search for image like standard search engine.

## Map

Map page calls https://json.geoiplookup.io/ and Google Map API. Combined they show your current location and other information. You can search for specific domain name to check where it is located (ISP). Other option is to chose from section popular domains.

## Joke

Joke page calls https://v2.jokeapi.dev/ API. It generates jokes for specific input fields. Thats it have fun :smile::smile::smile:   
But care Dark ones are pretty nasty. :anguished::anguished::anguished:

# Dont abuse API keys

I left my API keys so you can have easier time building this app. Please dont abuse my keys :innocent:. As soon as possible put your own. If i notice abuse then i will change them.
