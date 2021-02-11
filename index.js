// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchCoordsByIP("52.124.102.59", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);

});
/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */