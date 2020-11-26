import axios from "axios";

export const ytsInstance = axios.create({
  baseURL: "https://yts.mx/api/v2",
});
