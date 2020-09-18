import axios from "axios";

const KEY = "AIzaSyBq357xz3LjcgUJSiHiVlQM4DAidDguYF0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
