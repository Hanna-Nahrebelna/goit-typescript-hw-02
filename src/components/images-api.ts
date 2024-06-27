import axios from "axios";

axios.defaults.url = "https://api.unsplash.com/search";

export const getPhoto = async <T>(query: string, page: number): Promise<T> => {
  const params = {
        query: query,
        client_id: "zHEw6CcLWZnaWQw550Q4HwBUQyT8PdGomb-bZziyO_E",
        page: page,
        per_page: 15,
  }
  const response = await axios.get<T>("/photos", {params});
  return response.data;
};

