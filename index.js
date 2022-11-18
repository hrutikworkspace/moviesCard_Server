const express = require("express");
const app = express();
app.use(express.json());
const Port = 9001;

app.listen(Port, () => {
  console.log(`Server runniong on port ${Port}`);
});

app.get("/", (request, response) => {
  response.send("Hello World");
});

let movies = [
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "THOR",
    "rating": "8",
    "released date": "10/5/2022",
  },
  {
    "movie name": "SPIDER MAN",
    "rating": "9",
    "released date": "5/5/2021",
  },
  {
    "movie name": "SUPER MAN",
    "rating": "8",
    "released date": "5/5/2023",
  },
  {
    "movie name": "IRON MAN 2",
    "rating": "9",
    "released date": "1/5/2021",
  },
  {
    "movie name": "IRON MAN",
    "rating": "9",
    "released date": "15/5/2022",
  },
  {
    "movie name": "ANT-MAN",
    "rating": "9",
    "released date": "15/5/2016",
  },
  {
    "movie name": "WONDER-WOMEN",
    "rating": "7",
    "released date": "1/12/2017",
  },
  {
    "movie name": "SUPER-MAN",
    "rating": "9",
    "released date": "15/10/2015",
  },
  {
    "movie name": "HARRY POTTER",
    "rating": "7",
    "released date": "5/10/2019",
  },
  {
    "movie name": "BAT-MAN",
    "rating": "10",
    "released date": "20/1/2016",
  },
  {
    "movie name": "SNOW FALLING",
    "rating": "7",
    "released date": "1/12/2012",
  },
  {
    "movie name": "WORLD WAR Z",
    "rating": "10",
    "released date": "15/10/2019",
  },
  {
    "movie name": "OXYGEN...",
    "rating": "8",
    "released date": "15/07/2012",
  },
  {
    "movie name": "SPIDERE-MAN",
    "rating": "9",
    "released date": "5/5/2015",
  },
  {
    "movie name": "HAUNTED",
    "rating": "9",
    "released date": "15/5/2021",
  },
];

app.get("/movies", (request, res) => {
  res.json(movies);
});

app.post("/movie", (req,res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.send({message:"MOVIE ADDED SUCCESSFULLY"})
    res.json(movies);
})
