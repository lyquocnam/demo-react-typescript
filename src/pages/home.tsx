import React, { useState } from "react";
import useSWR from "swr";
import fetcher from "../libs/fetcher";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "store/reducer/system";

const url = "https://pokeapi.co/api/v2/pokemon";

function Home() {
  //  const [loading, setLoading] = useState(true);

  const { data } = useSWR(url, fetcher, { suspense: true });
  console.log(data);
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.count);

  function handleCount() {
    dispatch(Increment());
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleCount}>increment</button>
      <ul>
        {data.results.map((item: any, index: number) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
