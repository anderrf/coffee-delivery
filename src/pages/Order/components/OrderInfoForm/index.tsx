import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CardTitle,
  CardTitleIcon,
  FormCard,
  FormLine,
  OrderInfoFormContainer,
  PaymentOptions,
} from './styles'

export function OrderInfoForm() {
  return (
    <OrderInfoFormContainer>
      <h3>Complete seu pedido</h3>
      <FormCard>
        <CardTitle>
          <CardTitleIcon iconcolor={'yellow-dark'}>
            <MapPinLine size={24} />
          </CardTitleIcon>
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CardTitle>
        <FormLine gridoption="FIRST_THIRD_SECOND_FULL">
          <input type="text" placeholder="CEP" pattern="/\d{5}-\d{3}/" />
        </FormLine>
        <FormLine gridoption="FIRST_FULL">
          <input type="text" placeholder="Rua" />
        </FormLine>
        <FormLine gridoption="FIRST_THIRD_SECOND_FULL">
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </FormLine>
        <FormLine gridoption="FIRST_THIRD_SECOND_FOURTH_THIRD_SIXTH">
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </FormLine>
      </FormCard>
      <FormCard>
        <CardTitle>
          <CardTitleIcon iconcolor={'purple'}>
            <CurrencyDollar size={24} />
          </CardTitleIcon>
          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </CardTitle>
        <PaymentOptions>
          <button>
            <span>
              <CreditCard size={24} />
            </span>
            <span>CARTÃO DE CRÉDITO</span>
          </button>
          <button>
            <span>
              <Bank size={24} />
            </span>
            <span>CARTÃO DE DÉBITO</span>
          </button>
          <button>
            <span>
              <Money size={24} />
            </span>
            <span>DINHEIRO</span>
          </button>
        </PaymentOptions>
      </FormCard>
    </OrderInfoFormContainer>
  )
}
