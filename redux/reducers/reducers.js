import * as actionTypes from "../type";

const initialState = {
  account: "",
  userDetail: {},
  friendLists: [],
  friendMsg: [],
  loading: false,
  error: "",
  searchList: [],
};
export default function rootReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.CONNECT_WITH_WALLET:
      return {
        ...state,
        account: payload,
      };

    case actionTypes.ERROR_CONNECT_WITH_WALLET:
      return {
        ...state,
        account: "",
        error: payload,
      };
    default:
      return state;
  }
}
