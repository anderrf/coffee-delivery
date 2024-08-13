import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo/logo-coffee-delivery.svg'
import { HeaderContainer, LocationTag, ShoppingCartTag } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationTag>
          <MapPin size={24} />
          <span>Mongaguá, SP</span>
        </LocationTag>
        <NavLink to="/order">
          <ShoppingCartTag>
            <ShoppingCart size={24} />
          </ShoppingCartTag>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
