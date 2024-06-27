import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const getArticles = async(topic: string, thisPage: number) => {
  const response = await axios.get("/search", {
    params: {
      query: topic,
      page: thisPage,
      hitsPerPage: 6,
    },
  });

  return response.data.hits;
};
