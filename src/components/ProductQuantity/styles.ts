import styled from 'styled-components'

export const ProductQuantityContainer = styled.div`
  border-radius: 8px;

  color: ${(props) => props.theme['base-title']};
  font-size: 1rem;
  line-height: 1.3;

  height: 2.375rem;
  background-color: ${(props) => props.theme['base-button']};

  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    color: ${(props) => props.theme.purple};
    background: transparent;
    height: 100%;
    border: none;
    cursor: pointer;
    padding: 1rem;
    display: flex;

    span {
      margin: auto;
      align-self: center;
      line-height: 1em;
    }
  }
`
