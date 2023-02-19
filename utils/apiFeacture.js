import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { chatAppAddress, chatAppABI } from "../context/constants";

export const ChechIfWalletConnected = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const account = await window.ethereum.request({
      method: "eth_account",
    });

    const firstAccount = account[1];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

export const connectWallet = async () => {
  try {
    if (!window.ethereum) return console.log("Install MetaMask");
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const firstAccount = account[1];
    return firstAccount;
  } catch (error) {
    console.log(error);
  }
};

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(chatAppAddress, chatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("errr");
    console.log(error);
  }
};

export const convertTime = (time) => {
  const newTime = new Date(time.toNumber());

  const realTome =
    newTime.getHours() +
    "/" +
    newTime.getMinutes() +
    "/" +
    newTime.getSeconds() +
    " Date: " +
    newTime.getDate() +
    "/" +
    (newTime.getMonth() + 1) +
    "/" +
    newTime.getFullYear();

  return realTome;
};
