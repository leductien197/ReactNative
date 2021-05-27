import { combineReducers } from 'redux';
import user from "./userReducer";
import auth from "./authReducer";

const appReducers = combineReducers({
  user,
  auth,
});
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = null
  }
  return appReducers(state, action)
}
export default appReducers;