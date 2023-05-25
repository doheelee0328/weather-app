import {
  WeatherWrapper,
  CityWrapper,
  SideWrapper,
  TempWrapper,
} from './Weather.styled'

import { Error } from './Forecast.styled'
const WeatherData = ({ weatherData, showWeather, weatherError }) => {
  const displayWeatherData = () => {
    const [country, localTime, name, text, icon, temp] = weatherData

    const formDate = (date) => {
      const options = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }
      return new Intl.DateTimeFormat('en-GB', options).format(new Date(date))
    }
    // hello
    return (
      <>
        <WeatherWrapper>
          <CityWrapper>
            <p className='city'>
              {name}, <span>{country}</span>
            </p>

            <p className='date'>{formDate(localTime)}</p>
          </CityWrapper>
          <SideWrapper>
            <img src={icon} alt='weather images' />
            <TempWrapper>
              <p className='temp'>
                {temp} <span>°C</span>
              </p>
              <p className='weather'>{text}</p>
            </TempWrapper>
          </SideWrapper>
        </WeatherWrapper>
      </>
    )
  }
  return (
    <>{showWeather ? displayWeatherData() : <Error>{weatherError}</Error>}</>
  )
}

export default WeatherData
