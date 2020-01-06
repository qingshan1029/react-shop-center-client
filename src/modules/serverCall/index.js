import Auth from '../Auth'
import jumpTo from '../Navigation'
import axios from 'axios'
import qs from 'qs'
import paypalConfig from '../../configs/paypalConfig'

const URL = 'https://qingshan-shopping-server.netlify.com'
//const URL = 'http://192.168.1.52:5000' //kkj(Server-IP Address)
console.log('login-success  ')
const serverCall = (config) => {
  //header authorization
  console.log('Auth.user_token  '+Auth.user_token);
  if (Auth.user_token) {
    const token = Auth.getToken()
    config.headers = {
      "authorization": token,
    }
    console.log('token  '+ token);
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },

    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500
        }
        console.log('error  '+ error.response);
      }
      if(error.response.status===401){
        Auth.logout()
        jumpTo('/login')
        throw error

        console.log('error-state  '+ error.response.state);
      }
      return Promise.reject(error);
    });
  config.baseURL = URL
  return axios(config)
}
export default serverCall

export const login = (email, password) => {
  const body =
  {
    "credential": {
      "email": email,
      "password": password
    }
  }
  return serverCall({
    method: 'POST',
    url: '/users/login',
    data: body
  })

    .then(res => {
      Auth.setUserToken(res.data.user_token)
      console.log('login-success  '+ res.data.user_token)
      return res
    })
}

export const getPaypalToken = () => {
  return axios({
    method: 'POST',
    url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    auth: {
      username: paypalConfig.username,
      password: paypalConfig.password
    },
    data: qs.stringify({ "grant_type": "client_credentials" })
  })
}