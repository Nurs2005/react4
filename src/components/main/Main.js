import './Main.css'
import {useState} from 'react'
import Search from '../Serch/Serch'
import Location from '../Location/Location'
import WeatherBox from '../weatherBox/WeatherBox'
export default function Main() {
  const [weather,setWeather] = useState({})

  return (
    <div className={(typeof weather.main !="undefined") ? (weather.main.temp >16) ? 'app warm' : 'app' : 'app'}>
      <main>
        <Search setWeather={setWeather}/>
        {(typeof weather.main !="undefined")?(
          <div>
            <Location weather={weather}/>
            <WeatherBox weather={weather}/>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}


