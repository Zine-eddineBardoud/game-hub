import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "../services/constants";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () => {
  return useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
};

export default useGenres;
