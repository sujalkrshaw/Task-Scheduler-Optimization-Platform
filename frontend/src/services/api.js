import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const getGreedySchedule = () => API.get("/solve");

export const getOptimizedSchedule = () => API.get("/optimize");

export const getWhatIf = () => API.get("/whatif");