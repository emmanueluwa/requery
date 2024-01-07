import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  // const { data, error, isLoading } = useQuery({
  const priceQuery = useQuery({
    queryKey: ["price"],
    queryFn: () => {
      //return api call
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
    },
    refetchInterval: 1000 * 60,
  });

  const customerQuery = useQuery({
    queryKey: ["customers"],
    queryFn: () => {
      return axios("http://127.0.0.1:3000/api/customers");
    },
  });

  return (
    <>
      <div>
        {priceQuery.error ? <p>Opps! Error...</p> : null}
        {priceQuery.isLoading ? <p>Loading...</p> : null}

        {priceQuery?.data?.data?.bitcoin?.usd
          ? priceQuery.data.data.bitcoin.usd
          : null}
      </div>
    </>
  );
}

export default App;
