import styled from 'styled-components'

export const WeatherWrapper = styled.div`
  padding-top: 9%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  font-weight: 900;
`
export const CityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;
  .city {
    font-size: 35px;
    font-weight: 900;

    span {
      padding-left: 10px;
    }

    @media (max-width: 1050px) {
      font-size: 25px;
    }
    @media (max-width: 660px) {
      font-size: 20px;
    }
  }
  .date {
    font-size: 17px;
    text-align: center;

    @media (max-width: 1050px) {
      font-size: 15px;
    }
    @media (max-width: 660px) {
      font-size: 12px;
    }
  }
`
export const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: 20vh;

    @media (max-width: 1050px) {
      width: 100%;
      height: 100%;
    }
    /* @media (max-width: 660px) {
      width: 100%;
      height: 70%;
    } */
  }
`
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 1%;
  width: 100%;

  @media (max-width: 1050px) {
    display: flex;
  }

  .temp {
    font-size: 60px;

    font-weight: 900;

    @media (max-width: 1050px) {
      font-size: 40px;
    }
    @media (max-width: 698px) {
      font-size: 20px;
    }
  }
  span {
    font-size: 30px;
    padding-top: 2%;

    @media (max-width: 1050px) {
      font-size: 20px;
    }
    @media (max-width: 660px) {
      font-size: 10px;
    }
  }

  .weather {
    font-size: 18px;

    @media (max-width: 1050px) {
      font-size: 15px;
    }
    @media (max-width: 660px) {
      font-size: 10px;
    }
  }
`
