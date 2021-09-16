# viaplay-exercise (Viaplay Trailer API Service)

This project accepts a viaplay content URL and returns a URL(Youtube) to trailer of the movie

# How to Setup

`cd` into project root directory and do following steps

    touch .env
add themoviedb API key in .env file

    THE_MOVIE_DB_APIKEY={Your api key}
    THE_MOVIE_DB_API_URL=https://api.themoviedb.org/3
    PORT=3000
    
Now run

    npm install

then start process by running following command

    npm start

# API
## Input

    POST: http://localhost:3000/trailers
    Body: {
	    "input": "https://content.viaplay.se/pc-se/film/{movie name}"
    }
## Output

    Body: { 
    "trailerUrl": "https://www.youtube.com/watchv=tFMo3UJ4B4g",
    "success": true
    }
