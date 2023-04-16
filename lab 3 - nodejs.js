const express = require("express")
const bodyParser = require("body-parser");
const crypto = require("crypto");
const {randomUUID} = crypto;
const {json} = bodyParser;

const app = express();
app.use(json());
const reviews = [
    {
      _id: "634b9316044fe324bada04a2",
      user_id: "634b869a4c258ebcdd8a8af7",
      date: "2022-10-16T05:13:52.186Z",
      review: "great movies",
      movie_id: "634b8173fefd67ce2ee9516f",
      __v: 0,
    },
    {
      _id: "634baa50606954ee4fda629e",
      user_id: "634ba6b6044fe324bada04a7",
      date: "2022-10-16T06:51:43.772Z",
      review: "achived",
      movie_id: "634b8173fefd67ce2ee9516f",
      __v: 0,
    },
  ];
const movies = [
    {
      _id: "634b8173fefd67ce2ee9516f",
      plot: "A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
      title: "The Great Train Robbery",
      rated: "TV-G",
      __v: 0,
    },
    {
      _id: "634b9279c1dc1beeb8003447",
      plot: "A group of bandits stage a brazen train hold-up, only to find a determined posse hot on their heels.",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTU3NjE5NzYtYTYyNS00MDVmLWIwYjgtMmYwYWIxZDYyNzU2XkEyXkFqcGdeQXVyNzQzNzQxNzI@._V1_SY1000_SX677_AL_.jpg",
      title: "The Great Train Robbery 2",
      rated: "TV-G",
      __v: 0,
    },
    {
      _id: "634bab13ac3ee20086d30dae",
      plot: "Two peasant children, Mytyl and Tyltyl, are led by Berylune, a fairy, to search for the Blue Bird of Happiness. Berylune gives Tyltyl a cap with a diamond setting, and when Tyltyl turns the...",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjNlMThmNzItMTZlMS00YzJkLTk1MzktYzIyMzllOGFmZmRlXkEyXkFqcGdeQXVyMzE0MjY5ODA@._V1_SY1000_SX677_AL_.jpg",
      title: "The Blue Bird",
      rated: "TV-B",
      __v: 0,
    },
  ];


// get id + review of that movie
app.get("/v1/reviews/", (req, res) => {
  const review = req.query.review;
  const reviewMovives = reviews.filter(review => review.review === review);
  res.status(200).send(reviewMovives);
});

// add new review
app.post("/v1/movies", (req, res) => {
  const newReview = {
      _id: randomUUID(),
      user_id: req.body.user_id,
      date: new Date(),
      review: req.body.review,
      movie_id: req.body.movie_id;
      __v: req.body.__v,
  };
  reviews.push(newReview);
  res.send(reviews);
})

app.listen(8065, () => {
  console.log("Server running on http://localhost:8065");
})