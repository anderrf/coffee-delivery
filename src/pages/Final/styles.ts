import { styled } from 'styled-components'

export const FinalContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 5rem 0;

  h3 {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
  }

  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
`

export const FinalInfoImageDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 0;
`

export const OrderInfoArea = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to left,
    ${(props) => props.theme.yellow} 0%,
    ${(props) => props.theme.purple} 100%
  );
  border-radius: 4px 32px;
  position: relative;
  text-align: center;
  padding: 1px;
  box-sizing: border-box;
  overflow: hidden;

  > div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    background: ${(props) => props.theme.background};
    height: 100%;
    border-radius: 4px 32px;
    padding: 0 2rem;
  }
`

interface OrderFinalInfoIcon {
  infocolor: 'purple' | 'yellow' | 'yellow-dark'
}

export const OrderFinalInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    margin-left: 1rem;
  }
`

export const OrderFinalInfoIcon = styled.span<OrderFinalInfoIcon>`
  border-radius: 50%;
  border: none;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.infocolor]};
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
