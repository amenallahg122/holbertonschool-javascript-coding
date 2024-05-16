#!/usr/bin/node
const url = process.argv[2];
const filePath = process.argv[3];
const req = require('request');
const fs = require('fs');

req.get(url, (err, res, body) => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (erro) => {
      if (erro) {
        console.error(erro);
      }
    });
  }
});
