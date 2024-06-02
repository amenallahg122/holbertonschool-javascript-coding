#!/usr/bin/node
const filePath = process.argv[2];
const content = process.argv[3];
const fs = require('fs');

fs.writeFile(filePath, content, 'utf-8', (error) => {
  if (error) {
    console.error(error);
  }
});
