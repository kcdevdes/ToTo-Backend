import express from "express";
const app = express(); 
const defaultPort = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(defaultPort, () => {
  return console.log(`Express is listening at http://localhost:${defaultPort}`);
});


