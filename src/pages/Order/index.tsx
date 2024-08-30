import { FormProvider, useForm } from 'react-hook-form'
import { OrderInfoForm } from './components/OrderInfoForm'
import { OrderSummary } from './components/OrderSummary'
import { OrderContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeesContext } from '../../contexts/CoffeesContext'
import { useContext, useEffect, useState } from 'react'

export function Order() {
  const { finishOrder } = useContext(CoffeesContext)

  const newOrderFormValidationSchema = zod.object({
    zipcode: zod.string().max(9).min(8),
    street: zod.string().min(3),
    number: zod.string().min(1),
    complement: zod.string(),
    neighborhood: zod.string().min(3),
    city: zod.string().min(3),
    state: zod.string().length(2),
    paymentOption: zod.string().min(1),
  })

  type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>
  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipcode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentOption: '',
    },
  })

  const { handleSubmit, reset, formState, watch } = newOrderForm

  const handleCreateNewOrder = (data: NewOrderFormData) => {
    finishOrder(data)
    reset()
  }

  const formWatch = watch()

  const [isFormInvalid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(!formState.isValid)
  }, [formWatch])

  return (
    <OrderContainer onSubmit={handleSubmit(handleCreateNewOrder)}>
      <FormProvider {...newOrderForm}>
        <OrderInfoForm />
        <OrderSummary isFormInvalid={isFormInvalid} />
      </FormProvider>
    </OrderContainer>
  )
}
