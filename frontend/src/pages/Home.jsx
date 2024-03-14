import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://127.0.0.1:8000/api/user");
      setData(data);
    };

    getData();
  }, []);
  return <h1>{data.name}</h1>;
}
