import { imageBaseUrl } from "../Resources/constant";

export const imageUrlBuider = (server, id, secret) => {
  return `${imageBaseUrl}${server}/${id}_${secret}_b.jpg`;
};
