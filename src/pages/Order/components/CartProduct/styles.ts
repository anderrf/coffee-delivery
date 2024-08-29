import styled from 'styled-components'

export const SelectedProductContainer = styled.div`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`

export const ProductDisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  p {
    font-size: 1rem;
    line-height: 1.3;
  }

  img {
    margin-right: 1rem;
  }
`

export const ProductDisplayCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SelectedProductActions = styled.div`
  display: flex;
  flex-direction: row;
`

export const Price = styled.span`
  line-height: 1.3;
  font-size: 1rem;
  font-weight: bold;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.5rem;
  line-height: 1.6;

  cursor: pointer;

  :nth-child(1):is(span) {
    color: ${(props) => props.theme.purple};
  }
  :nth-child(2):is(span) {
    color: ${(props) => props.theme['base-text']};
    margin-left: 0.5rem;
  }
`
