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
