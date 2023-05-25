import { useState } from 'react'
import { Wrapper, InputWrapper, Button } from './Search.styled'
import { FORECAST_FETCH_ENDPOINT, WEATHER_FETCH_ENDPOINT } from './constants'

const Search = ({
  setShowWeather,
  setShowForecast,
  setWeatherData,
  setForecastData,
  setWeatherError,
  setForecastDataError,
}) => {
  const [input, setInput] = useState('')

  const inputHandler = (event) => {
    setInput(event.target.value)
  }

  const handleFetchResponse = (res, msg) => {
    if (res.status === 400) {
      console.log(res)
      throw Error(`Please enter the right city name! `)
    }
    return res.json()
  }

  const getWeatherList = (data) => {
    const {
      current: { condition, temp_c },
      location: { country, localtime, name },
    } = data

    const weatherList = [
      country,
      localtime,
      name,
      condition.text,
      condition.icon,
      temp_c,
    ]

    return weatherList
  }

  const getWeatherData = () => {
    fetch(`${WEATHER_FETCH_ENDPOINT}${input}`)
      .then((res) => handleFetchResponse(res, 'current weather'))
      .then((data) => {
        const weatherData = getWeatherList(data)

        setShowWeather((previousState) => {
          return { ...previousState, showWeather: true }
        })
        setWeatherData((previousState) => {
          return { ...previousState, weatherData: weatherData }
        })
      })
      .catch((err) => {
        setWeatherError((previousState) => {
          return { ...previousState, weatherError: err.message }
        })
        setShowWeather((previousState) => {
          return { ...previousState, showWeather: false }
        })
      })
  }

  const getForecastList = (data) => {
    const {
      forecast: { forecastday },
    } = data

    const dates = forecastday.map((el) => el.hour.slice(7, 15))
    return dates
  }
  // map((el) => el.condition.text),

  const getForecastData = () => {
    fetch(`${FORECAST_FETCH_ENDPOINT}${input}&days=5`)
      .then((res) => handleFetchResponse(res, 'forecast'))
      .then((data) => {
        const dates = getForecastList(data)

        setForecastData((previousState) => {
          return { ...previousState, forecastData: dates }
        })
        setShowForecast((previousState) => {
          return { ...previousState, showForecast: true }
        })
      })

      .catch((err) => {
        setForecastDataError((previousState) => {
          return { ...previousState, forecastDataError: err.message }
        })
        setShowForecast((previousState) => {
          return { ...previousState, showForecast: false }
        })
      })
  }

  const clickHandler = (event) => {
    event.preventDefault()

    getWeatherData()
    getForecastData()

    setInput('')
  }

  return (
    <Wrapper onSubmit={clickHandler}>
      <InputWrapper>
        <input
          type='text'
          onChange={inputHandler}
          value={input}
          placeholder='Enter Your Location'
        ></input>
      </InputWrapper>
      <Button>
        <i className='fa-solid fa-magnifying-glass'></i>
      </Button>
    </Wrapper>
  )
}

export default Search
