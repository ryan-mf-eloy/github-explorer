import { Repositories } from './../Dashboard/styles';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({theme}) => theme.textColor};
    font-weight: bold;
    -webkit-transition: all .2s;

    &:hover{
      color: #666666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: ${({theme}) => theme.secondaryColor};
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
      display: flex;
      margin-top: 40px;

      li {
        + li {
          margin-left: 80px;
        }

        strong{
          display: block;
          font-size: 36px;
          color: ${({theme}) => theme.secondaryColor};
        }

        span {
          display: block;
          margin-top: 4px;
          color: ${({theme}) => theme.textColor};
        }
      }
    }
`;

export const Issues = styled(Repositories)``;