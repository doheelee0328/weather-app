import { ForecastWrapper } from './Forecast.styled'

const Forecast = ({ showForecast, forecastData }) => {
  const displayForecastData = () => {
    return (
      <ForecastWrapper>
        {forecastData[0].map((el, index) => {
          return (
            <div className='forecast-background' key={index}>
              <p className='forecast-time'>{el.time.split(' ')[1]}</p>
              <img
                className='forecast-image'
                src={el.condition.icon}
                alt={el.condition.text}
              />
              <div>hello</div>
              <p className='forecast-text'>{el.condition.text}</p>
            </div>
          )
        })}
      </ForecastWrapper>
    )
  }

  return <>{showForecast && displayForecastData()}</>
}

export default Forecast
