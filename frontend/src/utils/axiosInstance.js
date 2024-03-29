import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

let authTokens = null;

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

instance.interceptors.request.use(async (req) => {
  if (!authTokens) {
    console.error("No token found, reading local storage");
    authTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;
    req.headers.Authorization = `Bearer ${authTokens?.access}`;
  }
  if (authTokens) {
    req.headers.Authorization = `Bearer ${authTokens?.access}`;
    console.info("Token was found, sending last request");
    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) return req;
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/token/refresh",
        {
          refresh: authTokens.refresh,
        }
      );
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      authTokens = response.data;
      req.headers.Authorization = `Bearer ${response.data.access}`;
      console.log("Token refreshed!");
    } catch (error) {
      console.error("Token refresh failed:", error);
      localStorage.removeItem("authTokens");
      window.location.href = "/login";
    }
    return req;
  }
  localStorage.removeItem("authTokens");
  window.location.href = "/";
  return req;
});
