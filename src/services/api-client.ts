import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "acd9862524bf429f8c2e7cda3999434c",
  },
});
