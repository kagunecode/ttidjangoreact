import { useForm } from "react-hook-form";

export function SignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <section className="h-full w-full flex items-center justify-center">
      <form
        className="flex w-[30%] flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="border p-2"
          {...register("name")}
          type="text"
          placeholder="Username"
        />
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
