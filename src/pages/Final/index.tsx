import {
  FinalContainer,
  FinalInfoImageDisplay,
  OrderFinalInfo,
  OrderFinalInfoIcon,
  OrderInfoArea,
} from './styles'
import deliveryMan from './../../assets/images/delivery-man.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Final() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
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
                <strong>Cartão de Crédito</strong>
              </p>
            </OrderFinalInfo>
          </div>
        </OrderInfoArea>
        <img src={deliveryMan} />
      </FinalInfoImageDisplay>
    </FinalContainer>
  )
}
