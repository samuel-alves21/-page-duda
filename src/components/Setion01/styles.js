import styled from 'styled-components'
import { breakPoints } from '../../breakPoints'
import { cssSnipets } from '../../GlobalStyle'

export const HeaderContainer = styled.header`
  ${cssSnipets.flexColumn}
  height: 95vh;

  background: url(${({ background }) => background}) no-repeat center;
  background-size: cover;

  @media screen and (max-width: ${breakPoints.mobile}) {
    height: 40vh;
  }
`
export const HeaderContent = styled.div`
  ${cssSnipets.flexColumn}
  gap: 50px;

  height: 100%;
  max-width: 885px;
  width: 80%;
  margin: 0 auto;
  padding: 155px 20px 0 20px;

  & :first-child {
    align-self: flex-end;
  }

  & :last-child {
    align-self: flex-start;
  }

  @media screen and (max-width: ${breakPoints.mobile}) {
    gap: 20px;
    padding: 70px 20px 0 20px;
  }
`

export const TextBox = styled.div`
  ${cssSnipets.flexRow}
  height: 79px;
  width: 272px;
  padding: 10px 15px;

  background: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: ${breakPoints.mobile}) {
    height: 55px;
    width: 225px;
  }
`

export const Text = styled.p`
  font-size: 1.5rem;
  color: white;
  text-align: center;

  margin: auto 0;

  @media screen and (max-width: ${breakPoints.mobile}) {
    font-size: 1.2rem;
  }
`
export const Bold = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: ${breakPoints.mobile}) {
    font-size: 1.2rem;
  }
`

export const Arrow = styled.img`
  font-size: 1rem;
  width: 48px;
  height: 48px;
  margin: auto;
  margin-bottom: -24px;
`

export const FadeTransition = styled.div`
  background-color: black;
  height: 5vh;
`
