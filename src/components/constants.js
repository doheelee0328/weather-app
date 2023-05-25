const WEATHER_API_URL = 'http://api.weatherapi.com/v1'
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export const WEATHER_FETCH_ENDPOINT = `${WEATHER_API_URL}/current.json?key=673230918b084e85977163833231802&q= `
export const FORECAST_FETCH_ENDPOINT = `${WEATHER_API_URL}/forecast.json?key=${API_KEY}&q=`
