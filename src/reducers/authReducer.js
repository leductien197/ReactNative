import * as Types from "../constants/ActionType"

const initialState = {
  isSignout: false,
  userID: '',
  user_profile: '',
  access_token: '',
  refresh_token: '',
  isLoading: '',
  users: {},
  message: [],
  check_network: false,
  isMaybelater : true,
}

const auth = (state = initialState, action) => {
  switch (action.type) {

    case Types.SIGN_UP_SUCCESS:
      return { ...state, userID: action?.id, message: action?.message };
    default:
      return state;
  }
}

export default auth