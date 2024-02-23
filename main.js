import { Network, Alchemy } from "alchemy-sdk";
const ref = document.getElementById("ref");
const blockNumberElement = document.getElementById("block-number");
const network = Network.ETH_MAINNET;
const apiKey = "nnrZdk6AtGsHrw2NFLaF4fRdUMuEiuDU";

const alchemy = new Alchemy({ network, apiKey });

async function fetchBlockNumber() {
  try {
    const blockNumber = await alchemy.core.getBlockNumber();
    blockNumberElement.textContent = blockNumber;
  } catch (error) {
    console.error("Error fetching block number:", error);
    blockNumberElement.textContent = "Error fetching data";
  }
}

fetchBlockNumber();

ref.addEventListener("click", fetchBlockNumber);
