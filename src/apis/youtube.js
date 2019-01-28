import axios from "axios";

const KEY = "AIzaSyDprPY0LU0YebT2NVJWaZAlvckMP1uYS24";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

// youtube.get("/search")
