import Search from '../components/Search'
import { useEffect, useState } from 'react'
import WeatherData from './WeatherData'
import Forecast from './Forecast'
import Background from '../images/background.jpg'
import Rain from '../images/rain.jpeg'
import Snow from '../images/snow.jpeg'
import Cloudy from '../images/cloudy.jpeg'
import Sunny from '../images/sunny.jpg'
import Thunderstorm from '../images/thunder.jpeg'
import { Wrapper } from './Homepage.styled'

const HomePage = () => {
  // store it in an object to avoid state hell
  const [showWeather, setShowWeather] = useState(false)
  const [showForecast, setShowForecast] = useState(false)
  const [weatherData, setWeatherData] = useState([])
  const [forecastData, setForecastData] = useState([])
  const [weatherError, setWeatherError] = useState(null)
  const [forecastDataError, setForecastDataError] = useState(null)
  const [weatherCondition, setWeatherCondition] = useState(null)

  const text = weatherData[3]

  useEffect(() => {
    const snowRegex = /snow/i
    const rainRegex = /rain|shower|mist/i
    const cloudyRegex = /cloudy|fog|overcast/i
    const sunnyRegex = /sunny|clear/i
    const thunderRegex = /thundery|lightning/i

    if (snowRegex.test(text)) {
      setWeatherCondition('snow')
    } else if (rainRegex.test(text)) {
      setWeatherCondition('rain')
    } else if (cloudyRegex.test(text)) {
      setWeatherCondition('cloudy')
    } else if (sunnyRegex.test(text)) {
      setWeatherCondition('sunny')
    } else if (thunderRegex.test(text)) {
      setWeatherCondition('thunder')
    }
  }, [text])

  //

  return (
    <Wrapper
      background={Background}
      rain={Rain}
      snow={Snow}
      cloudy={Cloudy}
      sunny={Sunny}
      thunder={Thunderstorm}
    >
      <div className={`background  ${showWeather && weatherCondition}`}>
        <Search
          setShowWeather={setShowWeather}
          setWeatherData={setWeatherData}
          setForecastData={setForecastData}
          setWeatherError={setWeatherError}
          setForecastDataError={setForecastDataError}
          setShowForecast={setShowForecast}
        ></Search>
        <div>
          <WeatherData
            showWeather={showWeather}
            weatherData={weatherData}
            weatherError={weatherError}
          ></WeatherData>
        </div>
        <div>
          <Forecast
            showForecast={showForecast}
            forecastData={forecastData}
            forecastDataError={forecastDataError}
          ></Forecast>
        </div>
      </div>
    </Wrapper>
  )
}

export default HomePage
