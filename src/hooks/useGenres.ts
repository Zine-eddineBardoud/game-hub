import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "../services/constants";
import useData, { FetchResponse } from "./useData";
import genres from "../data/genres";
import axios from "axios";
import apiClient from "../services/api-client";

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
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
