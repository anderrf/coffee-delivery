import { OrderInfoForm } from './components/OrderInfoForm'
import { OrderSummary } from './components/OrderSummary'
import { OrderContainer } from './styles'

export function Order() {
  return (
    <OrderContainer>
      <OrderInfoForm />
      <OrderSummary />
    </OrderContainer>
  )
}
