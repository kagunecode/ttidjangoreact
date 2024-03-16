import { useStore } from "../store";

export function Home() {
  const [tokenData, localToken] = useStore((state) => [
    state.tokenData,
    state.localToken,
  ]);
  console.log(tokenData);
  return (
    <div>
      {localToken && <h1 className="text-3xl">Welcome {tokenData.name}</h1>}
    </div>
  );
}
