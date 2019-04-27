import axios from "axios";
require('dotenv').config();


const BASEURL = "https://api.punkapi.com/v2/beers?";


export default {
  // getWeather: function (city, country) {
  //   console.log(city, country)
  //   console.log("API KEYS");
  //   console.log(APIKEY);
  //   let place = city.trim();
  //   console.log(BASEURL + place + "," + country + APIENDPOINT + APIKEY)
  //   return axios.get(BASEURL + place + "," + country + APIENDPOINT + APIKEY)
  // },

  getAllBeers: function () {
    return axios.get("https://api.punkapi.com/v2/beers");
  },

//   getJeopardyQuestion: function (categoryId, difficulty) {
//     console.log(categoryId, difficulty)
//     // let place = city.trim();
//     console.log(JeopardyBase + categoryId + "&&difficulty=" + difficulty + jeopardyEndPoint)
//     return axios.get(JeopardyBase + categoryId + "&&difficulty=" + difficulty + jeopardyEndPoint)
//   },

//   login: function (loginCreds) {
//     return axios.post('/api/users/login', loginCreds)
//   },
//   /* 
//     Path to check if user is logged in
//   */
//   loginCheck: function () {
//     return axios.get('/api/users/login')
//   },
//   /* 
//     Path to log out
//   */
//   logout: function () {
//     return axios.get('/api/users/logout')
//   },
//   /* 
//     Path to register new user, you can have more fields than this but "username" and "password" must exist
//     userInfo = {
//       username: "alex",
//       password: 12345Password!
//     }
//   */
//   register: function (userInfo) {
//     return axios.post("/api/users/register", userInfo)
//   },

//   //This route is to create an avatar
//   createAvatar: function (avatarInfo) {
//     return axios.post("api/avatar/create", avatarInfo)
//   },

//   findAvatar: function (findUser) {
//     console.log(findUser);
//     return axios.get("api/avatar/find/" + findUser.userid)
//   }
}
  

