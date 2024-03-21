import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IconTodoers } from "../icons/IconTodoers";
import { login } from "../utils/login";

export function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <section className="h-full w-full flex flex-col gap-10 items-center justify-center">
      <Link to="/" className="flex gap-4 items-center">
        <IconTodoers />
        <h1 className="text-7xl">Todoers</h1>
      </Link>
      <h2 className="text-3xl text-gray-600">Login to your account</h2>
      <form
        className="flex w-[30%] flex-col gap-5"
        onSubmit={handleSubmit(login)}
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
