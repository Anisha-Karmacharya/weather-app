import React from "react";
import moment from "moment/moment";
import { BsSunFill } from "react-icons/bs";
import { WiSunset } from "react-icons/wi";
import { TiWeatherWindy } from "react-icons/ti";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
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
  const icon = weatherData.list[0].weather[0].icon;
  return (
    <div className="weatherContainer">
      <div className="weatherInformation">
        {/* Country name , date and time */}
        <div className="locationData">
          <div>
          <h1>
            {weatherData.city.name} {weatherData.city.country}
          </h1>
          <p>{moment().format("LL")}</p>
          <p>{moment().format("LT")}</p>
          </div>
          <div>

          
          <div className="todayTemp">
            <div className="tempImg">
            <img
              src={`https://openweathermap.org/img/w/${icon}.png`}
              alt={icon}
            />
             <p className="temp">{weatherData.list[0].temp.day}°C</p>
            </div>
            <div>
             
              <p> {weatherData.list[0].weather[0].main}</p>
              <p> {weatherData.list[0].weather[0].description}</p>
            </div>

          </div>

        </div>
        </div>

        {/* Sunrise and sunset */}
        <div className="suninformation">
          <>
            <div>
              <p>
                <BsSunFill />
              </p>
              <p>
                {new Date(
                  weatherData.list[0].sunset * 1000
                ).toLocaleTimeString().slice(0, 4)} AM
              </p>
            </div>

            <div>
              <p>
                <WiSunset />
              </p>
              <p>
                {new Date(
                  weatherData.list[0].sunrise * 1000
                ).toLocaleTimeString().slice(0, 4)} PM
              </p>
            </div>
          </>

          <div>
            <FaTemperatureHigh />
            <p> {weatherData.list[0].temp.max}°C</p>
          </div>
          <div>
            <FaTemperatureLow /> <p> {weatherData.list[0].temp.min}°C</p>
          </div>
        </div>
      </div>

      <div>

      </div>
      <div className="extraInformation">
        <div>
          <h3>
            Wind <TiWeatherWindy />
          </h3>
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
  );
};

export default Weather;
