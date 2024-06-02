#!/usr/bin/node
const reqUrl = process.argv[2];
const req = require('request');

req.get(reqUrl, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    const movies = JSON.parse(body);
    const WedgeAntilles = 'https://swapi-api.hbtn.io/api/people/18/';
    const chars = movies.results[0].characters;
    if (chars.includes(WedgeAntilles)) {
      req.get(WedgeAntilles, (erro, resp, Body) => {
        if (erro) {
          console.error(erro);
        } else {
          const wedge = JSON.parse(Body);
          const filmsCount = wedge.films.length;
          console.log(filmsCount);
        }
      });
    }
  }
});
