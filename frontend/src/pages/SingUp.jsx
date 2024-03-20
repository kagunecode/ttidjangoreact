import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IconTodoers } from "../icons/IconTodoers";
import { Link } from "react-router-dom";

export function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await axios.post("http://127.0.0.1:8000/api/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/login");
  };
  return (
    <section className="h-full w-full flex flex-col gap-10 items-center justify-center">
      <Link to="/" className="flex gap-4 items-center">
        <IconTodoers />
        <h1 className="text-7xl">Todoers</h1>
      </Link>
      <h2 className="text-3xl text-gray-600">
        Register and start origanizing your time
      </h2>
      <form
        className="flex w-[30%] flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border p-2 rounded"
          {...register("name")}
          type="text"
          placeholder="Username"
        />
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
          value="Register"
        />
      </form>
      <h1>
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-orange-300 hover:text-orange-400 duration-150 font-bold"
        >
          Login now
        </Link>
      </h1>
    </section>
  );
}
