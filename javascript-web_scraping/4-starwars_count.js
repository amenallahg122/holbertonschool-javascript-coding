#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (!error) {
    const results = JSON.parse(body).results;
    const moviesWithWedge = results.filter(movie =>
      movie.characters.some(character => character.endsWith('/18/'))
    );
    console.log(moviesWithWedge.length);
  }
});
