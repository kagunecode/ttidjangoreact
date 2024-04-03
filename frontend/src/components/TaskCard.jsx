export function TaskCard({ task }) {
  return (
    <article className="bg-zinc-200 w-full">
      <h1 key={task.id}>{task.name}</h1>
    </article>
  );
}
