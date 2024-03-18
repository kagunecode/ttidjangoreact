import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

let authTokens = localStorage.getItem("authTokens")
  ? JSON.parse(localStorage.getItem("authTokens"))
  : null;

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: { Authorization: `Bearer ${authTokens?.access}` },
});

instance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    authTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;
    req.headers.Authorization = `Bearer ${authTokens?.access}`;
  }
  if (authTokens) {
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return req;
    const response = await axios.post(
      "http://127.0.0.1:8000/api/token/refresh",
      {
        refresh: authTokens.refresh,
      }
    );
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  }
  return req;
});
