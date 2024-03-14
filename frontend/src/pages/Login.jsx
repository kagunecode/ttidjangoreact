import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    const { data } = await axios.post(
      "http://127.0.0.1:8000/api/login",
      {
        email: formData.email,
        password: formData.password,
      },
      { withCredentials: true }
    );
    axios.defaults.headers.common["Authorization"] = `Bearer ${data["token"]}`;
    navigate("/");
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
