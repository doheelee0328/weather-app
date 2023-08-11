import styled from 'styled-components'

export const ForecastWrapper = styled.div`
  padding-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  gap: 20px;

  .forecast-background {
    /* height: 10vh;
    /* border-radius: 20px; */
    /* width: 5w; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 660px) {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2px;
    }
  }
  .forecast-time {
    font-size: 20px;
    margin-bottom: 20px;
    @media (max-width: 1050px) {
      font-size: 15px;
    }
    @media (max-width: 660px) {
      font-size: 10px;
    }
  }

  .forecast-text {
    text-align: center;
    margin-top: 20px;
    @media (max-width: 1050px) {
      font-size: 15px;
    }
    @media (max-width: 660px) {
      font-size: 8px;
    }
  }

  .forecast-image {
    width: 5vw;
    height: 100%;

    @media (max-width: 660px) {
      width: 50%;
      height: 100%;
    }
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
  font-size: 20px;
  padding-top: 50px;
  padding-bottom: 8px;
  text-align: center;
`
