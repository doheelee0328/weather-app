import styled from 'styled-components'

export const Wrapper = styled.div`
  opacity: 0.8;
  overflow: hidden;

  .background {
    width: 100vw;
    min-height: 100vh;
    color: white;
    background-image: url(${(props) => props.background});
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-top: 10%;
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
  width:50%
  height:
`
