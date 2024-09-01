import {
  FinalContainer,
  FinalInfoImageDisplay,
  OrderFinalInfo,
  OrderFinalInfoIcon,
  OrderInfoArea,
} from './styles'
import deliveryMan from './../../assets/images/delivery-man.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Final() {
  const { orderData } = useContext(CoffeesContext)
  const { street, number, city, state, paymentOption } = orderData
  let paymentOptionText
  switch (paymentOption) {
    case 'CREDITO':
      paymentOptionText = 'Cartão de Crédito'
      break
    case 'DEBITO':
      paymentOptionText = 'Cartão de Débito'
      break
    case 'DINHEIRO':
      paymentOptionText = 'Dinheiro'
      break
    default:
      paymentOptionText = 'Dinheiro'
      break
  }
  return (
    <FinalContainer>
      <h3>Uhu! Pedido confirmado</h3>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <FinalInfoImageDisplay>
        <OrderInfoArea>
          <div>
            <OrderFinalInfo>
              <OrderFinalInfoIcon infocolor="purple">
                <MapPin size={24} />
              </OrderFinalInfoIcon>
              <p>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
                <br />
                {city} - {state}
              </p>
            </OrderFinalInfo>
            <OrderFinalInfo>
              <OrderFinalInfoIcon infocolor="yellow">
                <Timer size={24} />
              </OrderFinalInfoIcon>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </OrderFinalInfo>
            <OrderFinalInfo>
              <OrderFinalInfoIcon infocolor="yellow-dark">
                <CurrencyDollar size={24} />
              </OrderFinalInfoIcon>
              <p>
                Pagamento na entrega
                <br />
                <strong>{paymentOptionText}</strong>
              </p>
            </OrderFinalInfo>
          </div>
        </OrderInfoArea>
        <img src={deliveryMan} />
      </FinalInfoImageDisplay>
    </FinalContainer>
  )
}
