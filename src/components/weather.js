import React from "react";
import moment from "moment/moment";
const Weather = ({ weatherData }) => {
  const weekData = weatherData.list.map((data, index) => {
    return {
      key: index,
      main: data.weather[0].main,
      day: new Date(data.dt * 1000)
        .toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .slice(0, 3),
      desc: data.weather[0].description,
      hTemp: data.temp.max,
      lTemp: data.temp.min,
    };
  });
  console.log(weekData)
  return (
    <div>
      <p> city: {weatherData.city.name}</p>
      <p>icon:{ weatherData.list[0].weather[0].icon}</p>
      <p> country: {weatherData.city.country}</p>
      <p> date : {moment().format("LL")}</p>
      <p> desc: {weatherData.list[0].weather[0].description}</p>
      <p> main: {weatherData.list[0].weather[0].main}</p>
      <p> temp: {weatherData.list[0].temp.day}</p>
      <p> highTemp:{weatherData.list[0].temp.max}</p>
      <p> lowTemp:{weatherData.list[0].temp.min}</p>
      <p>
        {" "}
        sunrise:{" "}
        {new Date(weatherData.list[0].sunset * 1000).toLocaleTimeString()}
      </p>
      <p>
        {" "}
        sunset:{" "}
        {new Date(weatherData.list[0].sunrise * 1000).toLocaleTimeString()}
      </p>
      <p> clouds: {weatherData.list[0].clouds}</p>
      <p> humidity: {weatherData.list[0].humidity}</p>
      <p> wind: {weatherData.list[0].speed}</p>
      <p> pressure:{weatherData.list[0].pressure}</p>
    </div>
  );
};

export default Weather;
