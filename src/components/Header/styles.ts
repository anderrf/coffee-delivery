import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      height: 3rem;
      padding: 0 1rem;

      border-radius: 8px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const LocationTag = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['purple-light']};

  span: {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const ShoppingCartTag = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 8px;

  svg {
    position: absolute;
    top: calc(50% - 12px);
    left: calc(50% - 12px);
  }
`

export const CartProductsQuantity = styled.span`
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  top: -0.625rem;
  right: -0.625rem;
  border-radius: 50%;
  font-weight: bold;
  text-align: center;
  line-height: 1.25rem;
`
