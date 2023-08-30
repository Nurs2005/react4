import './Serch.css'
import {useState} from 'react'
const api = {
  key:'c92f4a6a5f69a0c371dbf5928e3d72c2',
  base:'https://api.openweathermap.org/data/2.5/'
}
export default function Search({setWeather}) {
    const [query,setQuery] = useState('')
    const search = evt =>{
        if(evt.key==="Enter"){
          fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result)
            setQuery('')
          })
        }
      }
  return (

        <div className="seartch-box">
            <input
             type="text"
             className="seartch-bar" 
             placeholder='searc h..'
             onChange={e => setQuery(e.target.value)}
             value={query}
             onKeyPress={search}/>
        </div>
  );
}


