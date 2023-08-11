import styled from 'styled-components'
import { theme } from '../theme/theme'

export const Wrapper = styled.div`
  opacity: 0.8;
  height: 100%;
  margin: auto;
  .background {
    background-image: url(${(props) => props.background});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    color: ${theme.color.white};
  }

  .background.rain {
    background-image: url(${(props) => props.rain});
  }
  .background.snow {
    background-image: url(${(props) => props.snow});
  }
  .background.cloudy {
    background-image: url(${(props) => props.cloudy});
  }
  .background.sunny {
    background-image: url(${(props) => props.sunny});
  }
  .background.thunder {
    background-image: url(${(props) => props.thunder});
  }
`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    width: 90%;
  }
`
