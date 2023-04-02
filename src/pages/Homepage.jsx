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
  const [weather, setWeather] = useState({
    showWeather: false,
    showForecast: false,
    weatherData: [],
    forecastData: [],
    weatherError: null,
    forecastDataError: null,
    weatherCondition: null,
  })

  const {
    showWeather,
    showForecast,
    weatherData,
    forecastData,
    weatherError,
    forecastDataError,
    weatherCondition,
  } = weather

  const text = weatherData[3]

  useEffect(() => {
    const snowRegex = /snow/i
    const rainRegex = /rain|shower|mist/i
    const cloudyRegex = /cloudy|fog|overcast/i
    const sunnyRegex = /sunny|clear/i
    const thunderRegex = /thundery|lightning/i

    if (snowRegex.test(text)) {
      setWeather((previousState) => {
        return { ...previousState, weatherCondition: 'snow' }
      })
    } else if (rainRegex.test(text)) {
      setWeather((previousState) => {
        return { ...previousState, weatherCondition: 'rain' }
      })
    } else if (cloudyRegex.test(text)) {
      setWeather((previousState) => {
        return { ...previousState, weatherCondition: 'cloudy' }
      })
    } else if (sunnyRegex.test(text)) {
      setWeather((previousState) => {
        return { ...previousState, weatherCondition: 'sunny' }
      })
    } else if (thunderRegex.test(text)) {
      setWeather((previousState) => {
        return { ...previousState, weatherCondition: 'thunder' }
      })
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
          setShowWeather={setWeather}
          setWeatherData={setWeather}
          setForecastData={setWeather}
          setWeatherError={setWeather}
          setForecastDataError={setWeather}
          setShowForecast={setWeather}
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

/*
const [showWeather, setShowWeather] = useState(false)
  const [showForecast, setShowForecast] = useState(false)
  const [weatherData, setWeatherData] = useState([])
  const [forecastData, setForecastData] = useState([])
  const [weatherError, setWeatherError] = useState(null)
  const [forecastDataError, setForecastDataError] = useState(null)
  const [weatherCondition, setWeatherCondition] = useState(null)
*/
