import axios from "axios";

export const getPhoto = async <T>(query: string, page: number): Promise<T> => {
  try {
    const response = await axios.get<T>(`https://api.unsplash.com/search/photos`, {
      params: {
        query: query,
        client_id: "zHEw6CcLWZnaWQw550Q4HwBUQyT8PdGomb-bZziyO_E",
        page: page,
        per_page: 10,
      },
      
    });
    return response.data;
  } catch (error) {
    console.error("error.message", error);
    throw error
  }
};
