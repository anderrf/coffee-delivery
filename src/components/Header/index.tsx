import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo/logo-coffee-delivery.svg'
import { HeaderContainer, LocationTag, ShoppingCartTag } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <LocationTag>
          <MapPin size={24} />
          <span>Mongaguá, SP</span>
        </LocationTag>
        <ShoppingCartTag>
          <ShoppingCart size={24} />
        </ShoppingCartTag>
      </nav>
    </HeaderContainer>
  )
}
