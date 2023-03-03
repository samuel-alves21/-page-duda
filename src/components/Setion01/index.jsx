import {
  Bold,
  HeaderContainer,
  HeaderContent,
  Text,
  TextBox,
  Arrow,
} from './styles'
import { useMediaQuery } from 'react-responsive'
import { breakPoints } from '../../breakPoints'
import backgroundDesktop from '../../img/headerBackground.jpg'
import backgroundMobile from '../../img/headerBackgroundMobile.jpg'
import arrow from '../../img/arrowDown.png'

export const Section01 = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${breakPoints.mobile})`,
  })
  const background = isMobile ? backgroundMobile : backgroundDesktop

  return (
    <HeaderContainer className='header' background={background}>
      <HeaderContent className='header-content'>
        <TextBox className='text-box'>
          <Text className='text'>
            Seja a <Bold>1° escolha</Bold> dos clientes
            <br />e <Bold>venda todos os dias.</Bold>
          </Text>
        </TextBox>
        <TextBox className='text-box'>
          <Text className='text'>
            <Bold>Posicionamento Estratégico</Bold> e<br />
            <Bold>Vendas Premium</Bold> desde 2018.
          </Text>
        </TextBox>
      </HeaderContent>
      <Arrow src={arrow} alt='' />
    </HeaderContainer>
  )
}
