import styled from 'styled-components'
import { breakPoints } from '../../breakPoints'

export const FooterContainer = styled.footer`
  height: 95vh;
  background: url(${({ background }) => background}) no-repeat center;
  background-size: cover;

  @media screen and (max-width: ${breakPoints.mobile}) {
    height: 60vh;
  }
`

export const FooterContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 4rem;
  color: rgba(53, 53, 53, 1);
  font-family: 'Playfair Display', serif;
`

export const Buttons = styled.div`
  height: 195px;
  /* max-width: 10px; */
  width: 35%;
  border-radius: 10px;

  background: linear-gradient(
      263.48deg,
      #888888 0%,
      #666666 25.19%,
      #212121 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
`
