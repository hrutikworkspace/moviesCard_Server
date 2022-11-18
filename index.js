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
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
  },
  {
    "movie name": "IRON MAN",
    "rating": "8",
    "released date": "15/5/2022",
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
