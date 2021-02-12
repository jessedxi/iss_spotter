const { fetchMyIp, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require("./iss_promised");


/*fetchMyIp()
.then(fetchCoordsByIP)
.then(fetchISSFlyOverTimes)
.then(body => console.log(body)); */

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {

    const dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${dateTime}, for ${duration} seconds!`);

  }
}; 

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });