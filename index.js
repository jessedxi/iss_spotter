const { nextISSTimesForMyLocation } = require('./iss');

const printDates = function (passTimes) {
  for (const pass of passTimes) {

    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime}, for ${duration} seconds!`);

  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(`Error, it did't work!`, error);
  }

  printDates(passTimes);
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