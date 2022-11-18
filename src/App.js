import React, {useState} from 'react';
import "./App.css";
import axios from 'axios';
import { forecast } from './api';
import Weather from './components/weather';
function App() {
  const [value, setValue] = useState()
  const [data, setData] = useState()
  const handleInputChange = e => {
    setValue(e.target.value)
  };
  const handleSearch = e => {
    e.preventDefault();
    axios.get(forecast(value)).then(response => {
      setData(response.data) 
    })
  };
  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="e.g. Kathmandu"
        />
      </form>
      {data !== undefined ?
      <Weather weatherData={data}/>:<div></div>
      }
      
    </div>
  );
}

export default App;
