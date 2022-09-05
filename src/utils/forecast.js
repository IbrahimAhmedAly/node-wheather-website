const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7de2052dd929c28f95756a1f9fd7c12f&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";
  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unalbe to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degress out.`
      );
    }
  });
};

module.exports = forecast;
