import './WeaterBox.css'
export default function WeatherBox({weather}) {
  return (
    <div className="weather-box">
    <div className="temp">
      {Math.round(weather.main.temp)}°с
    </div>
    <div className="weather">
      {weather.weather[0].main}
    </div>
  </div>
  );
}


