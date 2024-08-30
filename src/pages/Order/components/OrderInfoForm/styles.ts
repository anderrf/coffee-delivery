import { styled } from 'styled-components'

export const OrderInfoFormContainer = styled.div`
  h3 {
    font-family: 'baloo 2', Mono;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`

export const FormCard = styled.div`
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};

  border: none;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CardTitle = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justitfy-content: start;
  line-height: 1.3;

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`

interface CardTitleIconColor {
  iconcolor: 'yellow-dark' | 'purple'
}

export const CardTitleIcon = styled.span<CardTitleIconColor>`
  color: ${(props) => props.theme[props.iconcolor]};
  background: none;
`

const GridOptions = {
  FIRST_THIRD_SECOND_FULL: '1fr 2fr',
  FIRST_FULL: '1fr',
  FIRST_THIRD_SECOND_FOURTH_THIRD_SIXTH: '3fr 4fr 1fr',
} as const

interface FormLineGrid {
  gridoption: keyof typeof GridOptions
}

export const FormLine = styled.div<FormLineGrid>`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => GridOptions[props.gridoption]};
  gap: 1rem;

  input {
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 8px;
    background: ${(props) => props.theme['base-input']};
    font-size: 0.875rem;
    height: 2rem;
    padding: 0.5rem;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  button {
    background: ${(props) => props.theme['base-button']};
    border: none;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;

    font-size: 0.75rem;

    :nth-child(1):is(span) {
      color: ${(props) => props.theme.purple};
    }
    :nth-child(2):is(span) {
      color: ${(props) => props.theme['base-text']};
      margin-left: 1.5rem;
    }

    &.selected {
      border: 2px solid ${(props) => props.theme.purple};
    }
  }
`
