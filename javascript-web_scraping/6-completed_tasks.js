#!/usr/bin/node

const request = require('request');
const args = process.argv;
const userCountDict = {};

request(args[2], (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i++) {
      const currentUser = data[i].userId;
      if (!userCountDict[currentUser] && data[i].completed === true) {
        userCountDict[currentUser] = 0;
      }
      if (data[i].completed === true) {
        userCountDict[currentUser]++;
      }
    }
  }
  console.log(userCountDict);
});
