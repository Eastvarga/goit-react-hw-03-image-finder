import axios from "axios";

const AUTH_TOKEN = "19923655-1a3b53a89179877892e074405";
// const path = "https://pixabay.com/api";
const filter = "image_type=photo&orientation=horizontal";
axios.defaults.baseURL = "https://pixabay.com/api";

const fetchImages = (query, { perPage, page }) => {
  return axios
    .get(
      `/?key=${AUTH_TOKEN}&q=${query}&${filter}&per_page=${perPage}&page=${page}`
    )
    .then((response) => {
      //   console.dir(response);
      return response.data;
    });
};

export default fetchImages;
