import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Config from '../constants/Config';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
callApi = (endpoint, method = 'GET', body, header = '') => {
  console.log('http:', `${Config.API_URL}${endpoint}`)
  return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body,
    headers: header,
    timeout: 90000,
  }).then(response => {
    // console.log('HTTP', response);
    return response.data;
  }).catch((error) => {
    // console.log('HTTP123', error);
    return error.response
  });
};

callApiWithHeader = async (endpoint, method = 'GET', body, xplace = true, upload = '') => {
  const auValue = await AsyncStorage.getItem('access_token');
  let header = {
    "Authorization": `Bearer ${auValue}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  }
  if (upload === true) {
    header = {
      "Authorization": `Bearer ${auValue}`,
      // "Content-Type": "application/json",
      "Accept": "application/json",
      'Content-Type': 'multipart/form-data',
    }
  } else {
    header = {
      "Authorization": `Bearer ${auValue}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Cache-Control": "no-cache"
    }
  }
  // if (xplace) header["X-Place-Id"] = body?.place_uuid || "gVxqPuyBt9gxtAbg99Vs-";
  console.log('httpHeader:', `${Config.API_URL}${endpoint}`)
  // console.log('header', header)
  return axios({
    method: method,
    url: `${Config.API_URL}${endpoint}`,
    data: body,
    headers: header,
    timeout: 90000,
  }).then(response => {

    return response;
  }).catch(error => {
    console.log(error.response)
    if (error.response && error.response.status == 401) {
      var res = {
        data: {
          status: 401,
          message: 'Authentication required'
        },
        status: 401,
      }
      return res;
    } else if (error.response) {
      Toast.showWithGravity(error.response.status + ' Connect errors', Toast.LONG, Toast.TOP)
    } else {
      Toast.showWithGravity(JSON.stringify(error.message), Toast.LONG, Toast.TOP)
    }
  });
};


module.exports = {
  callApi,
  callApiWithHeader
};
