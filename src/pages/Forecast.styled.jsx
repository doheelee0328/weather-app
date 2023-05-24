import styled from 'styled-components'

export const ForecastWrapper = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: auto;
  margin: auto;
  gap: 30px;

  .forecast-background {
    height: 20vh;

    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  .forecast-time {
    font-size: 20px;
  }

  .forecast-text {
    text-align: center;
  }

  @media (max-width: 774px) {
    .forecast-background {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
export const Error = styled.p`
  font-size: 30px;
  padding-top: 30px;
`
