import { WeatherWrapper } from './Weather.styled'
const WeatherData = ({ weatherData, showWeather, weatherError }) => {
  const displayWeatherData = () => {
    const [country, localTime, name, text, icon, temp] = weatherData

    return (
      <>
        <p>{country}</p>
        <p>{localTime}</p>
        <p>{name}</p>
        <p>{text}</p>
        <img src={icon} alt='weather images' />
        <p>{temp}</p>
      </>
    )
  }
  return (
    <WeatherWrapper>
      {showWeather ? displayWeatherData() : <p>{weatherError}</p>}
    </WeatherWrapper>
  )
}

export default WeatherData
