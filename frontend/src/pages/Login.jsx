import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useStore } from "../store";
import { IconTodoers } from "../icons/IconTodoers";

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
      navigate("/app");
    }
  };
  return (
    <section className="h-full w-full flex flex-col gap-10 items-center justify-center">
      <Link to="/" className="flex gap-4 items-center">
        <IconTodoers />
        <h1 className="text-7xl">Todoers</h1>
      </Link>
      <h2 className="text-3xl text-gray-600">Login to your account</h2>
      <form
        className="flex w-[30%] flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border p-2 rounded"
          {...register("email")}
          type="email"
          placeholder="Email"
        />
        <input
          className="border p-2 rounded"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <input
          className="bg-orange-300 cursor-pointer hover:bg-orange-400 duration-150 text-white p-3 rounded"
          type="submit"
          value="Login"
        />
      </form>
      <h1>
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-orange-300 hover:text-orange-400 duration-150 font-bold"
        >
          Register now
        </Link>
      </h1>
    </section>
  );
}
