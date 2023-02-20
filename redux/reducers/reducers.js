import * as actionTypes from "../type";

const initialState = {
  error: "",
  account: "",
  login: false,
  friendMsg: [],
  authError: "",
  userDetail: {},
  loading: false,
  searchList: [],
  friendLists: [],
  userAssign: false,
  friendListError: "",
  friendChatError: "",
  friendUserDetail: {},
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
    case actionTypes.lOGIN:
      return {
        ...state,
        account: payload.account,
        userDetail: payload.user,
        login: true,
        userAssign: true,
        friendLists: payload.friendLists,
      };

    case actionTypes.ERROR_AUTH:
      return {
        ...state,
        account: "",
        userDetail: {},
        login: false,
        friendLists: [],
        authError: payload,
      };

    case actionTypes.SEARCH_USER:
      return {
        ...state,
        searchList: payload,
      };

    case actionTypes.FRIEND_LIST:
      return {
        ...state,
        friendLists: payload,
        friendListError: "",
      };
    case actionTypes.ERROR_FRIEND_LIST:
      return {
        ...state,
        friendLists: [],
        friendListError: payload,
      };

    case actionTypes.FRIEND_MSG:
      return {
        ...state,
        friendMsg: payload,
        friendChatError: "",
      };
    case actionTypes.CURRENT_FRIEND_DETAIL:
      return {
        ...state,
        friendUserDetail: payload,
        friendChatError: "",
      };
    case actionTypes.ERROR_FRIEND_MSG:
      return {
        ...state,
        friendMsg: [],
        friendChatError: payload,
      };

    case actionTypes.LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
