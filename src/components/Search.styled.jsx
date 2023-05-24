import styled from 'styled-components'
import { theme } from '../theme/theme'
export const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(50px, -50px);
`

export const InputWrapper = styled.div`
  input {
    width: 450px;
    height: 45px;
    outline: none;
    border: none;
    background-color: ${theme.color.whiteOpacity};
    border-radius: 10px;
    text-align: center;
    font-weight: 900;
    font-size: 15px;

    ::placeholder {
      color: ${theme.color.black};
      text-align: center;
    }
  }
`

export const Button = styled.button`
  background-color: none;
  transform: translate(-38px, 0px);
  border: none;
  background: none;
  cursor: pointer;

  i {
    font-size: 20px;
    opacity: 0.6;
  }
`
