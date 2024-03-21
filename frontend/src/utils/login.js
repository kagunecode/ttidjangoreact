import axios from "axios";

export async function login(formData) {
  const response = await axios.post("http://127.0.0.1:8000/api/token", {
    email: formData.email,
    password: formData.password,
  });
  if (response.status === 200) {
    localStorage.setItem("authTokens", JSON.stringify(response.data));
    window.location.href = "/app";
  }
}
