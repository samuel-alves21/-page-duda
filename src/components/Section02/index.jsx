import { Buttons, FooterContainer, FooterContent, Title } from "./styles"
import backgroundDesktop from '../../img/footerBackground.jpg'
import backgroundMobile from '../../img/footerBackgroundMobile.jpg'
import { useMediaQuery } from "react-responsive"
import { breakPoints } from "../../breakPoints"

export const Section02 = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakPoints.mobile})`,
  })
  const background = isMobile ? backgroundMobile : backgroundDesktop

  return (
    <FooterContainer className="footer" background={background}>
      <FooterContent>
        <Title>Clique nos links:</Title>
        <Buttons></Buttons>
        <Buttons></Buttons>
      </FooterContent>
    </FooterContainer>
  )
}