/**
 * @param {string} weatherApiResponse
 */
const willItRain = (weatherApiResponse) => {
  return new Promise((resolve, reject) => {
    const response = JSON.parse(weatherApiResponse);

    if (response.now.hasOwnProperty("rainExpected")) {
      resolve(response.now.rainExpected);
    }

    reject("No weather data received");
  });
};

// JSON processing

willItRain('{"now":{"temperature":18,"humidity":"30%","rainExpected":true}}')
  .then((rainExpected) => {
    console.log(rainExpected);
  })
  .catch((error) => {
    console.error(error);
  }); // true

willItRain('{"now":{"temperature":25,"humidity":"90%","rainExpected":false}}')
  .then((rainExpected) => {
    console.log(rainExpected);
  })
  .catch((error) => {
    console.error(error);
  }); // false

willItRain('{"now":{}}')
  .then((rainExpected) => {
    console.log(rainExpected);
  })
  .catch((error) => {
    console.error(error);
  }); // No weather data received
