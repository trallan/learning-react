import { useState } from 'react'
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [weather, setWeather] = useState();
  const [geo, setGeo] = useState();
  const [locationInput, setLocationInput] = useState("");


  async function fetchWeather(latitude, longitude) {
    setError("");

    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`);

      if (!response.ok) {
        throw new Error("Could not fetch weather data");
      }

      const data = await response.json();

      setWeather(data);

    } catch (error) {
      setError(error.message);
    } finally {

    }
  }

  async function fetchGeoCoding(name) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1`);

      if (!response.ok) {
        throw new Error("Could not fetch geo data");
      }

      const data = await response.json();

      if (!data.results || data.results.length === 0) {
        throw new Error("Could not find that location");
      }

      const latitude = data.results[0].latitude
      const longitude = data.results[0].longitude

      setGeo(data);

      await fetchWeather(latitude, longitude);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
}

  return (
    <>
      <h1>Hello Weather App !</h1>
      <p>Creating a weather app using api</p>

      <section>
        <input type="text" placeholder='Stockholm' onChange={(e) => {setLocationInput(e.target.value)}}/>
        <button onClick={() => fetchGeoCoding(locationInput)}>Sök</button>
      </section>

      <section>
        <b>Weather Data</b>
        <div id="weather-data">
          <span>Stad: {geo ? geo.results[0].name : ""}</span>
          <span>Temp: {weather ? weather.current.temperature_2m + "°C" : "°C" }</span>
          <span>Latitude: {weather ? weather.latitude : "" }</span>
          <span>Longitude: {weather ? weather.longitude : "" }</span>
        </div>
      </section>
    </>
  )
}

export default App
