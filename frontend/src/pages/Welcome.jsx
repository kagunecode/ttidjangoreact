import { IconTodoers } from "../icons/IconTodoers";

export function Welcome() {
  return (
    <section className="h-full flex flex-col items-center gap-2 justify-center">
      <div className="flex items-center gap-4">
        <IconTodoers />
        <h1 className="text-9xl">Todoers</h1>
      </div>
      <p className="text-4xl text-gray-600">
        Create task lists easily and keep your time and schedule organized
      </p>
      <div className="flex mt-4 gap-10 text-4xl">
        <button className="text-orange-400 hover:text-orange-800 duration-150">
          Start Now
        </button>
        <a href="https://github.com/kagunecode/ttidjangoreact" target="_blank">
          GitHub Repo
        </a>
      </div>
    </section>
  );
}
