import axios from "axios";

const apiRequest = axios.create({
  baseURL: `https://nc-games-july-2022.herokuapp.com/api`,
});

export const fetchReviews = async () => {
  const { data } = await apiRequest.get(`/reviews`);
  return data.reviews;
};
