import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tester"],
    queryFn: () => {
      //return api call
      return axios(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
    },
  });

  return (
    <>
      <div>
        {error ? <p>Opps! Error...</p> : null}
        {isLoading ? <p>Loading...</p> : null}

        {data?.data?.bitcoin?.usd ? data.data.bitcoin.usd : null}
      </div>
    </>
  );
}

export default App;
