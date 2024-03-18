import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useStore } from "../store";

export function Login() {
  const { register, handleSubmit } = useForm();
  const [setTokenData, setLocalToken] = useStore((state) => [
    state.setTokenData,
    state.setLocalToken,
  ]);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const response = await axios.post("http://127.0.0.1:8000/api/token", {
      email: formData.email,
      password: formData.password,
    });
    if (response.status === 200) {
      let data = jwtDecode(response.data.access);
      setTokenData(data);
      setLocalToken(response.data);
      localStorage.setItem("authTokens", JSON.stringify(response.data));
      navigate("/");
    }
  };
  return (
    <section className="h-full w-full flex items-center justify-center">
      <form
        className="flex w-[30%] flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border p-2"
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          className="border p-2"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <input
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 duration-150 text-white p-4"
          type="submit"
        />
      </form>
    </section>
  );
}
