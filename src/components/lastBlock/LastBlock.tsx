import { useState, useEffect } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import "./lastBlock.css";

export default function LastBlock() {
  const network = Network.ETH_MAINNET;
  const { REACT_APP_MY_API_KEY } = process.env;
  const apiKey = REACT_APP_MY_API_KEY;
  const alchemy = new Alchemy({ network, apiKey });
  const [number, setNumber] = useState("loading...");

  async function fetchBlockNumber() {
    try {
      const blockNumber = await alchemy.core.getBlockNumber();
      setNumber(blockNumber.toString());
    } catch (error) {
      console.error("Error fetching block number:", error);
      setNumber("Loading failed, Click Refresh Please.");
    }
  }

  useEffect(() => {
    fetchBlockNumber();
  }, []);

  const handleRefresh = async () => {
    await fetchBlockNumber();
  };

  return (
    <div className="block-number" data-testid="last-block">
      <h1>The Last Block number of Ethereum mainnet is:</h1>
      <h2>{number}</h2>
      <button onClick={handleRefresh} className="refresh">
        Refresh
      </button>
    </div>
  );
}
