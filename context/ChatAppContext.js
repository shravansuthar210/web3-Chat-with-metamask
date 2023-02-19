import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "@/utils/apiFeacture";

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [userName, setUserName] = useState("");
  const [friendLists, setFriendLists] = useState([]);
  const [friendMsg, setFriendMsg] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");

  //chat user Data
  const [currentUSerName, setCurrentUSerName] = useState("");
  const [currentUserAddress, setcurrentUserAddress] = useState("");

  const router = useRouter();

  const connectWithWallet = async () => {
    try {
      const contract = await connectingWithContract();
      const connectAccount = await connectWallet();
      setAccount(connectAccount);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    try {
      //get contarct
      const contract = await connectingWithContract();
      console.log(contract);
      const connectAccount = await connectWallet();

      setAccount(connectAccount);
      // await contract.createAccount("suthar");
      // const userName = await contract.getUsername(connectAccount);
      // console.log(userName);
      // setUserName(userName);

      //get user friend user lits

      // const friendList = await contract.getMyFriendList();
      // setFriendLists(friendList);

      //get all all user

      const userList = await contract.getAllAppUser();
      console.log(userList);
      setUserList(userList);
    } catch (error) {
      console.log(error);
      setError("Please install abd connect your wallete");
    }
  };

  const createAccount = async (name) => {
    try {
      const connectAccount = await connectWallet();
      const contract = await connectingWithContract();
      const getCreateUser = await contract.createAccount(name);
      setLoading(true);
      await getCreateUser.wait();
      setLoading(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };
  // useEffect(() => {
  //   fetchData();
  //   // createAccount("shravan", account);
  // }, []);

  return (
    <ChatAppContect.Provider
      value={{
        account,
        connectWithWallet,
      }}
    >
      {children}
    </ChatAppContect.Provider>
  );
};
