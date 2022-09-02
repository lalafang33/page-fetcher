const url = process.argv[2];
const localPath = process.argv[3];
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require("fs");

const request = require('request');
request(url, (error, response, body) => {

    fs.promises.writeFile(localPath, body, "utf8")
    .then(() => {
      stats = fs.statSync(localPath)
      console.log(`Downloaded ${stats.size} bytes to ${localPath}`)
      process.exit();
    })
    .catch(err => {
      console.log(err);
      process.exit();
    })
});