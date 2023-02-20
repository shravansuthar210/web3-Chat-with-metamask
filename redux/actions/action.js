import * as actionType from "../type";
import {
  ChechIfWalletConnected,
  connectWallet,
  connectingWithContract,
} from "@/utils/apiFeacture";

export const connectWithWalletAction = () => async (dispatch) => {
  try {
    const contract = await connectingWithContract();
    const connectAccount = await connectWallet();
    dispatch({
      type: actionType.CONNECT_WITH_WALLET,
      payload: connectAccount,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionType.ERROR_CONNECT_WITH_WALLET,
      payload: error,
    });
  }
};
export const signIn = (account) => async (dispatch) => {
  try {
    const contract = await connectingWithContract();
    const user = await contract.getUsername(account);
    if (user) {
      const friendLists = await contract.getMyFriendList();
      dispatch({
        type: actionType.lOGIN,
        payload: {
          account,
          user,
          friendLists,
        },
      });
    } else {
      dispatch({
        type: actionType.ERROR_CONNECT_WITH_WALLET,
        payload: "user not define",
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionType.ERROR_CONNECT_WITH_WALLET,
      payload: error,
    });
  }
};

export const addFriend = (friendDetail) => async (dispatch) => {
  try {
    const contract = await connectingWithContract();
    const user = await contract.addFriend(
      friendDetail.address,
      friendDetail.name
    );
    const friendList = await contract.getMyFriendList();
    dispatch({
      type: actionType.FRIEND_LIST,
      payload: friendList,
    });
  } catch (error) {
    dispatch({
      type: actionType.ERROR_FRIEND_LIST,
      payload: error,
    });
  }
};

export const registerUser = (data) => async (dispatch) => {
  try {
    const contract = await connectingWithContract();
    await contract.createAccount(data.name);
    dispatch({
      type: actionType.CONNECT_WITH_WALLET,
      payload: connectAccount,
    });
  } catch (error) {
    dispatch({
      type: actionType.ERROR_AUTH,
      payload: error,
    });
  }
};
