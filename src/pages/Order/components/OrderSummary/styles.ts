import styled from 'styled-components'

export const OrderSummaryContainer = styled.div`
  h3 {
    font-family: 'baloo 2', Mono;
  }

  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`
export const SummaryCard = styled.div`
  width: 100%;
  padding: 2rem;
  background: ${(props) => props.theme['base-card']};

  border: none;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ConfirmOrderButton = styled.button`
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 8px;
  line-height: 1.6;
  font-size: 0.875rem;
  height: 2.875rem;
  cursor: pointer;
`
export const SelectedProductsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const TotalPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  line-height: 1.3;

  p {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 0.875rem;
    }

    label {
      font-size: 1rem;
    }

    strong :is(span, label) {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
