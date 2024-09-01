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
import { useFormContext } from 'react-hook-form'
import { useState } from 'react'

export function OrderInfoForm() {
  const { register, setValue } = useFormContext()

  const [selectedPaymentOption, setSelectedPaymentOption] = useState('')

  const handleSelectPaymentOption = (option: string) => {
    setSelectedPaymentOption(option)
    setValue('paymentOption', option)
  }

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
          <input type="text" placeholder="CEP" {...register('zipcode')} />
        </FormLine>
        <FormLine gridoption="FIRST_FULL">
          <input type="text" placeholder="Rua" {...register('street')} />
        </FormLine>
        <FormLine gridoption="FIRST_THIRD_SECOND_FULL">
          <input type="text" placeholder="Número" {...register('number')} />
          <input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
        </FormLine>
        <FormLine gridoption="FIRST_THIRD_SECOND_FOURTH_THIRD_SIXTH">
          <input
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          <input type="text" placeholder="Cidade" {...register('city')} />
          <input type="text" placeholder="UF" {...register('state')} />
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
        <input
          hidden
          value={selectedPaymentOption}
          type="text"
          {...register('paymentOption')}
        />
        <PaymentOptions>
          <button
            type="button"
            className={selectedPaymentOption === 'CREDITO' ? 'selected' : ''}
            onClick={() => {
              handleSelectPaymentOption('CREDITO')
            }}
          >
            <span>
              <CreditCard size={24} />
            </span>
            <span>CARTÃO DE CRÉDITO</span>
          </button>
          <button
            type="button"
            className={selectedPaymentOption === 'DEBITO' ? 'selected' : ''}
            onClick={() => {
              handleSelectPaymentOption('DEBITO')
            }}
          >
            <span>
              <Bank size={24} />
            </span>
            <span>CARTÃO DE DÉBITO</span>
          </button>
          <button
            type="button"
            className={selectedPaymentOption === 'DINHEIRO' ? 'selected' : ''}
            onClick={() => {
              handleSelectPaymentOption('DINHEIRO')
            }}
          >
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
