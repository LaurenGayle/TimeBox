// server.js
// where your node app starts

const express = require("express");
const app = express();

const tasks = [
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of tasks to the webpage
app.get("/tasks", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(tasks);
});

// listen for requests
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
