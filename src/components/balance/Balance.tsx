import "./balance.css";
import { useEffect, useState } from "react";

export default function Balance() {
  const [balance, setBalance] = useState("loading...");

  useEffect(() => {
    const url: string = `https://api.etherscan.io/api?module=account&action=balance&address=0xdac17f958d2ee523a2206206994597c13d831ec7&tag=latest&apikey=U1EY3SWGNYUZ26W45E9FUCJW4CF3GPEWR6`;
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        const balance = data.result / 1e6; // Convert wei to USDT
        setBalance(balance.toString() + "$");
      })
      .catch((error) => {
        console.error(error);
        setBalance("Loading failed.");
      });
  }, []);

  return (
    <div className="balance">
      <h1>The USDT balance of the Provided address is:</h1>
      <h2>{balance}</h2>
    </div>
  );
}
