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

export const ShoppingCartTag = styled.a`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`
