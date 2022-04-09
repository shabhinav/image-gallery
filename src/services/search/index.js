import axios from "axios";
import { baseUrl } from "../../config";

export const searchImages = (text, page) => {
  return axios.post(
    `${baseUrl}/?method=flickr.photos.search&api_key=${
      process.env.REACT_APP_API_KEY
    }&per_page=9&page=${page}&text=${
      text || "flower"
    }&format=json&nojsoncallback=1`
  );
};
