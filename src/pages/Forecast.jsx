import { ForecastWrapper } from './Forecast.styled'

const Forecast = ({ showForecast, forecastData, forecastDataError }) => {
  const displayForecastData = () => {
    const [forecastTime, iconUrl, forecastInfo] = forecastData[0]

    return (
      <div>
        <p>{forecastTime}</p>
        {iconUrl.map((url, index) => {
          return <img src={url} alt='images' key={index} />
        })}
        <p>{forecastInfo}</p>
      </div>
    )
  }

  return (
    <ForecastWrapper>
      {showForecast ? displayForecastData() : <p>{forecastDataError}</p>}
    </ForecastWrapper>
  )
}

export default Forecast
