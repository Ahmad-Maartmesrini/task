import { Network, Alchemy } from "alchemy-sdk";

const blockNumberElement: any = document.getElementById("block-number");
const ref: any = document.getElementById("ref");

const network: Network = Network.ETH_MAINNET;
const apiKey: string = "nnrZdk6AtGsHrw2NFLaF4fRdUMuEiuDU"; // my API Key from Alchemy
const alchemy = new Alchemy({ network, apiKey });

async function fetchBlockNumber() {
  try {
    const blockNumber: number = await alchemy.core.getBlockNumber();
    blockNumberElement.textContent = blockNumber;
  } catch (error: any) {
    console.error("Error fetching block number:", error);
    blockNumberElement.textContent = "Error fetching data";
  }
}

fetchBlockNumber();

ref.addEventListener("click", fetchBlockNumber);

(function getUSDTBalance() {
  const url: string = `https://api.etherscan.io/api?module=account&action=balance&address=0xdac17f958d2ee523a2206206994597c13d831ec7&tag=latest&apikey=U1EY3SWGNYUZ26W45E9FUCJW4CF3GPEWR6`;
  const balanceElement: HTMLElement | null = document.getElementById("balance");
  if (balanceElement) {

    fetch(url)
      .then((response: Response) => response.json())
      .then((data: any) => {
        const balance = data.result / 1e6; // Convert wei to USDT
        balanceElement.textContent = balance.toString()
      })
      .catch((error) => {
        console.error(error);
        balanceElement.textContent = "Error fetching balance."

      });
  } else {
    console.error("Balance element not found");
  }
})();
