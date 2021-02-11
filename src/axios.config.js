import axios from "axios";

const base = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/",
});

export default base;
