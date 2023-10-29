import search from './Assets/search.png';
import clear from './Assets/clear.png';
import React,{useState} from 'react';
import rain from './Assets/rain (1).png';
import axios from 'axios';

function Weather() {
  const [city,setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'cb75b2b1cc245fcf3533662e33dc4729'; // api key
  
  

  const getWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
      console.log("hello world");
      console.log("weather:-" , response.data);
    } catch (error) {
      console.error(error);
    }
  };


    return (
    <div className='container-fluid'>
          <div className='weather-box'>
               <h1 style={{marginTop :"20px",
                           fontWeight: "400",
                           textAlign: "center"}}>Weather In</h1>
                
                <input type='text' placeholder='search you city name...' className='cityInput' value={city} onChange={(e) => setCity(e.target.value)}  />
                <div className='serach-btn' onClick={getWeather}>
                    <img height={"20px"} width={"20px"} src={search} alt='search-ico' style={{marginTop: "6px",marginLeft: "4px"}} />
                </div>

                { weatherData && (
                 <div className='weather-details d-flex justify-content-center'>
                          <img src={clear} alt='clear weather' style={{width: "94px",margin: "19px"}} />
                          <div style={{fontSize:"28px",marginTop:"-34px"}}>
                              <p> {Math.round(weatherData.main.temp - 273.15)}°C</p>
                          </div>
                          <div className='weather-loction'>
                             <h2> {weatherData.name} </h2>
                          </div>

                            <div className='element'>
                                    <div className='data'>
                                        <div className='humidity-percent'>
                                            <p>{weatherData.main.humidity} %</p>
                                        </div>
                                        <div className='humidity-text'>humidity</div>
                                    </div>
                                    <div className='data'>
                                        <div className='wind-percent'>
                                          <p>{weatherData.wind.speed} km/h</p>
                                        </div>
                                        <div className='wind-text'>wind</div>
                                    </div>
                            </div>
                  </div> 
                )}
                  {/* {weatherData && (
                        <div>
                          <h2>Weather in {weatherData.name}</h2>
                          <p>Temperature: {weatherData.main.temp}°C</p>
                          <p>Weather: {weatherData.weather[0].description}</p>
                        </div>
                      )} */}

                </div>

          </div>
  )
}

export default Weather;

