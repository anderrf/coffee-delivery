import styled from 'styled-components'

export const ProductHomeCardContainer = styled.div`
  border: none;
  border-radius: 8px;

  background-color: ${(props) => props.theme['base-card']};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-align: center;

  width: 16rem;

  img {
    width: 10rem;
    margin-top: -2rem;
  }

  h4 {
    font-family: 'baloo 2', mono;
    color: ${(props) => props.theme['base-subtitle']};
  }

  label {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CardTags = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;

  div {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};

    border-radius: 16px;

    font-size: 0.625rem;
    line-height: 1.3;
    text-align: center;

    display: flex;

    height: 1.6rem;
    padding: 0 1rem;
  }

  span {
    text-align: center;
    line-height: 1.3;
    margin: auto;
  }
`

export const CardActions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  color: ${(props) => props.theme['base-text']};
  line-height: 1.3;

  label {
    font-size: 0.875rem;
  }

  span {
    font-size: 1.5rem;
    font-family: 'baloo 2';
  }
`

export const AddToCartButton = styled.button`
  background: ${(props) => props.theme.purple};
  border: none;
  border-radius: 8px;

  color: ${(props) => props.theme['base-card']};

  cursor: pointer;

  width: 2.375rem;
  height: 2.375rem;
`
