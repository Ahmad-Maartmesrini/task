import "./balance.css";
import { useEffect, useState } from "react";
export default function Balance() {
  const [balance, setBalance] = useState("loading...");
  const { REACT_APP_ACCOUNT_ADDRESS } = process.env;
  const url: any = REACT_APP_ACCOUNT_ADDRESS;
  useEffect(() => {
    fetch(url)
      .then((response: Response) => response.json())
      .then((data) => {
        const balance = data.result / 1e6; // Convert wei to USDT
        setBalance(balance + "$");
      })
      .catch((error) => {
        console.error(error);
        setBalance("Loading failed.");
      });
  }, []);

  return (
    <div className="balance" data-testid="balance-test">
      <h1>The USDT balance of the Provided address is:</h1>
      <h2 data-testid="$">{balance}</h2>
    </div>
  );
}
