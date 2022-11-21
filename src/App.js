import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { forecast } from "./api";
import Weather from "./components/weather";
import moment from "moment";
import "./App.css";
function App() {
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    axios.get(forecast(value)).then((response) => {
      setData(response.data);
    });
  };
  return (
    <div className="App" id="app">
      <div className="header">
        <div>
          <h2>Weather Forecast</h2>
          <p>{moment().format("dddd MMMM Do YYYY")}</p>
          <p>{moment().format("h:mm A")}</p>
        </div>
        <div>
          <form onSubmit={handleSearch} className="search__container">
            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder="Search for location"
              className="search__input"
            />
          </form>
        </div>
      </div>

      {data !== undefined ? <Weather weatherData={data} /> : <div></div>}
    </div>
  );
}

export default App;
