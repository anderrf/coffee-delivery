import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo/logo-coffee-delivery.svg'
import {
  CartProductsQuantity,
  HeaderContainer,
  LocationTag,
  ShoppingCartTag,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Header() {
  const { selectedProducts } = useContext(CoffeesContext)
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
            {selectedProducts.length ? (
              <CartProductsQuantity>
                {selectedProducts.length}
              </CartProductsQuantity>
            ) : null}
          </ShoppingCartTag>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
