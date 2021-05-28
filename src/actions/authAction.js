import * as Types from "../constants/ActionType"
import AsyncStorage from "@react-native-async-storage/async-storage"
import HTTP from "../services/HTTP";
import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native'

// callApi : cho các hoạt động không cần authentication
// callApiWithHeader : cho các hoạt động cần authentication