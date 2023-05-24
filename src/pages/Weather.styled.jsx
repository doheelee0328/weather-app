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
  }
  .date {
    font-size: 17px;
    text-align: center;
  }
`
export const SideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: 20vh;
  }
`
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 1%;

  .temp {
    font-size: 60px;

    font-weight: 900;
  }
  span {
    font-size: 30px;
    padding-top: 2%;
  }

  .weather {
    font-size: 18px;
  }
`
