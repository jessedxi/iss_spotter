const { nextISSTimesForMyLocation } = require('./iss');

 nextISSTimesForMyLocation((error, passTimes) => {
   if(error) {
     return console.log(`Error, it did't work!`, error);
   }

   console.log(passTimes);
 })
/*
const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});
*/

/*
fetchCoordsByIP("52.124.102.59", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);

});
*/
/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
}); */