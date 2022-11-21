import React from "react";
import moment from "moment/moment";
import { BsSunFill } from "react-icons/bs";
import { WiHumidity, WiSunset } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
const Weather = ({ weatherData }) => {
  const weekData = weatherData.list.map((data, index) => {
    return {
      key: index,
      main: data.weather[0].main,
      icon: data.weather[0].icon,
      day: new Date(data.dt * 1000)
        .toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          weekday: "long",
          day: "numeric",
        })
        .slice(0, 3),
      desc: data.weather[0].description,
      hTemp: data.temp.max,
      lTemp: data.temp.min,
      humidity: data.humidity,
      wind: data.speed,
    };
  });
  const icon = weatherData.list[0].weather[0].icon;
  return (
    <div className="weatherContainer">
      <div className="weatherInformation">
        {/* Country name , date and time */}
        <div className="locationData">
          <h1 className="locationName">
            {weatherData.city.name} {weatherData.city.country}
          </h1>
          <p className="temp">{weatherData.list[0].temp.day}°C</p>
        </div>
        {/* Sunrise and sunset */}
        <h2 style={{marginTop: "1.5em"}}> Today's Highlight</h2>
        <div className="todayHighlight">
          <div className="suninformation">
            <h3>Sunrise and Sunset</h3>
            <div className="suninfo">
              <div>
                <p>
                  <BsSunFill style={{color: "#FAAA56", fontSize: "28px"}}/>
                </p>
                <p>
                  {new Date(weatherData.list[0].sunset * 1000)
                    .toLocaleTimeString()
                    .slice(0, 4)}{" "}
                  AM
                </p>
              </div>
              <div>
                <p>
                  <WiSunset style={{color: "#FAAA56", fontSize: "28px"}}/>
                </p>
                <p>
                  {new Date(weatherData.list[0].sunrise * 1000)
                    .toLocaleTimeString()
                    .slice(0, 4)}{" "}
                  PM
                </p>
              </div>
            </div>
          </div>
          <div className="extraInformation">
            <div>
              <h3>Wind</h3>
              <p> {weatherData.list[0].speed}</p>
            </div>
            <div>
              <h3>Pressure</h3>
              <p> {weatherData.list[0].pressure}</p>
            </div>
            <div>
              <h3>Humidity</h3>
              <p> {weatherData.list[0].humidity}</p>
            </div>
          </div>
        </div>
        <h2 className="week"> Week</h2>
        <div className="weekDatas">
          {weekData.map((data) => (
            <div className="weekData">
              <div className="weekDay">
                <p>{data.day}</p>
                <img
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                  alt={icon}
                />
              </div>

              <p className="weekDesc">{data.desc}</p>
              <div className="weekTemp">
                <div className="wind">
                  <p>
                    <WiHumidity />
                    {data.humidity}%
                  </p>
                  <p>
                    <TiWeatherWindy />
                    {data.wind}km/h
                  </p>
                </div>
                <div className="highTemp">
                  <p>
                    <FaTemperatureHigh />
                    {data.hTemp}°C
                  </p>
                  <p>
                    <FaTemperatureLow />
                    {data.lTemp}°C
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weather;
