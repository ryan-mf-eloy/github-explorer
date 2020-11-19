import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: ${({theme}) => theme.secondaryColor};
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  flex: 1;

  input {
    flex: 1;
    border: none;
    border-left: 5px solid transparent;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    background: ${({theme}) => theme.primaryColor};
    color: ${({theme}) => theme.secondaryColor};
    box-shadow: 0 0 40px rgba(0,0,0,.05);

    ${({ hasError }) => hasError && css`border-color: #ff5555`};

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    background: #50fa7b;
    border-radius: 0 5px 5px 0;
    border: none;
    -webkit-transition: background-color .2s;

    svg {
      color: #000000;
    }

    &:hover{
      background: ${shade(0.2, '#50fa7b')}
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a{
    background: ${({theme}) => theme.primaryColor};
    border-radius: 5px;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    -webkit-transition: all .2s;
    box-shadow: 0 0 20px rgba(0,0,0,.05);

    + a {
      margin-top: 16px;
    }

    &:hover{
      transform: translateX(10px);
    }
    
    svg{
      margin-left: auto;
      color: ${({theme}) => theme.iconColor}
    }

    img {
      width: 64px;
      width: 64px;
      border-radius: 50%;
    }

    div{
      margin-left: 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color: ${({theme}) => theme.secondaryColor};
      }

      p {
        font-size: 18px;
        color: ${({theme}) => theme.textColor};
        margin-top: 4px;
      }
    }
  }
`;

export const SetThemeButton = styled.button`
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background: #2C2F33;
  position: fixed;
  right: 30px;
  bottom: 30px;
  box-shadow: 0 0 20px rgba(0,0,0,.05);
  -webkit-transition: background-color .2s;

  &:hover{
    background: ${shade(0.2, `#2C2F33`)};
  }
`;

export const Error = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ff5555;
  background: #ff55551a;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  max-width: 540px;

  svg {
    margin-right: 10px
  }
`;

