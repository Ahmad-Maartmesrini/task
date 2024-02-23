import { Network, Alchemy } from "alchemy-sdk";

const blockNumberElement = document.getElementById("block-number");
const ref = document.getElementById("ref");

const network = Network.ETH_MAINNET;
const apiKey = "nnrZdk6AtGsHrw2NFLaF4fRdUMuEiuDU"; // my API Key from Alchemy
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

(function getUSDTBalance() {
  const url = `https://api.etherscan.io/api?module=account&action=balance&address=0xdac17f958d2ee523a2206206994597c13d831ec7&tag=latest&apikey=U1EY3SWGNYUZ26W45E9FUCJW4CF3GPEWR6`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const balance = data.result / 1e6; // Convert wei to USDT
      document.getElementById("balance").textContent = balance;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("balance").textContent =
        "Error fetching balance.";
    });
})();
