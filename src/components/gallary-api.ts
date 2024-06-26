import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const getArticles = async(topic: string, currentPage: number) => {
  const response = await axios.get("/search", {
    params: {
      query: topic,
      page: currentPage,
      hitsPerPage: 5,
    },
  });

  return response.data.hits;
};
