import { useStore } from "../store";

export function Home() {
  const tokenData = useStore((state) => state.tokenData);
  console.log(tokenData);
  return <h1>{tokenData.name}</h1>;
}
