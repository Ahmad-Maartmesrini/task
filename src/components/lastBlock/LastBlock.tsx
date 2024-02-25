import { useState } from "react";
import { Network, Alchemy } from "alchemy-sdk";
import "./lastBlock.css";

const LastBlockNumber = () => {
  const network: Network = Network.ETH_MAINNET;
  const apiKey: string = "nnrZdk6AtGsHrw2NFLaF4fRdUMuEiuDU"; // my API Key from Alchemy
  const alchemy = new Alchemy({ network, apiKey });
  const [number, setNumber] = useState("loading...");

  async function fetchBlockNumber() {
    try {
      const blockNumber: number = await alchemy.core.getBlockNumber();
      setNumber(blockNumber.toString());
    } catch (error) {
      console.error("Error fetching block number:", error);
      setNumber("Loading failed, Click Refresh Please.");
    }
  }
  fetchBlockNumber();

  return (
    <div className="block-number">
      <h1>The Last Block number of Ethereum mainnet is:</h1>
      <h2>{number}</h2>
      <button onClick={fetchBlockNumber} className="refresh">
        Refresh
      </button>
    </div>
  );
};

export default LastBlockNumber;
