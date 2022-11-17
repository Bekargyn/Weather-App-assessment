import { useState } from "react";
import DisplayWeather from "./display_weather";
import { FavCities } from "./fav_cities";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");

  const APIKEY = "ae16cbaf562c195112c6da01163354aa";
  async function weatherData(e) {
    e.preventDefault();
    if (city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => {
          console.log(err);
        });

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setCity(value);
    }
  };
  return (
    <div className="weather container">
      <div className="search-header">
        <h3 className="title">Weather App</h3>
        <form>
          <input
            type="text"
            placeholder="Search city (required)"
            name="city"
            onChange={(e) => handleChange(e)}
            value={city}
          />
          <button
            className="getweather"
            onClick={(e) => {
              weatherData(e);
              setCity("");
            }}
          >
            Submit
          </button>
        </form>
        <p>OR</p>
        <FavCities />
      </div>
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
