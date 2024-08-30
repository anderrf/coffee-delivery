import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  CoffeeProduct,
  coffeesReducer,
  CoffeeTag,
  CreateOrderData,
  SelectedProduct,
} from '../reducers/Coffees/reducer'
import {
  addProductToCartAction,
  editProductOnCartAction,
  finishOrderAction,
  removeProductFromCartAction,
} from '../reducers/Coffees/actions'
import { useNavigate } from 'react-router-dom'

function generateFixedCoffees() {
  return [
    {
      id: uuidv4(),
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: [CoffeeTag.TRADICIONAL],
      unitPrice: 9.9,
      image: 'expresso.png',
    },
    {
      id: uuidv4(),
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      tags: [CoffeeTag.TRADICIONAL],
      unitPrice: 9.9,
      image: 'americano.png',
    },
    {
      id: uuidv4(),
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      tags: [CoffeeTag.TRADICIONAL],
      unitPrice: 9.9,
      image: 'expresso-cremoso.png',
    },
    {
      id: uuidv4(),
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.GELADO],
      unitPrice: 9.9,
      image: 'cafe-gelado.png',
    },
    {
      id: uuidv4(),
      title: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'cafe-com-leite.png',
    },
    {
      id: uuidv4(),
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'latte.png',
    },
    {
      id: uuidv4(),
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'capuccino.png',
    },
    {
      id: uuidv4(),
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'macchiato.png',
    },
    {
      id: uuidv4(),
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      tags: [CoffeeTag.TRADICIONAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'mochaccino.png',
    },
    {
      id: uuidv4(),
      title: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      tags: [CoffeeTag.ESPECIAL, CoffeeTag.COM_LEITE],
      unitPrice: 9.9,
      image: 'chocolate-quente.png',
    },
    {
      id: uuidv4(),
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOOLICO, CoffeeTag.GELADO],
      unitPrice: 9.9,
      image: 'cubano.png',
    },
    {
      id: uuidv4(),
      title: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      tags: [CoffeeTag.ESPECIAL],
      unitPrice: 9.9,
      image: 'havaiano.png',
    },
    {
      id: uuidv4(),
      title: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      tags: [CoffeeTag.ESPECIAL],
      unitPrice: 9.9,
      image: 'arabe.png',
    },
    {
      id: uuidv4(),
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      tags: [CoffeeTag.ESPECIAL, CoffeeTag.ALCOOLICO],
      unitPrice: 9.9,
      image: 'irlandes.png',
    },
  ]
}

interface CoffeesContextType {
  availableProducts: CoffeeProduct[]
  selectedProducts: SelectedProduct[]
  orderData: CreateOrderData
  addProductToCart: (product: SelectedProduct) => void
  editProductOnCart: (product: SelectedProduct) => void
  removeProductFromCart: (product: SelectedProduct) => void
  finishOrder: (data: CreateOrderData) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    {
      selectedProducts: [],
      orderData: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:coffees-state-1.0.0',
      )
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { selectedProducts, orderData } = coffeesState

  useEffect(() => {
    localStorage.setItem(
      '@coffee-delivery:coffees-state-1.0.0',
      JSON.stringify(coffeesState),
    )
  }, [coffeesState])

  const [availableProducts] = useState<CoffeeProduct[]>(() => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:available-products',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    const fixedCoffees = generateFixedCoffees()
    localStorage.setItem(
      '@coffee-delivery:available-products',
      JSON.stringify(fixedCoffees),
    )
    return fixedCoffees
  })

  const addProductToCart = (product: SelectedProduct) => {
    const sameProductIndex = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.product.id === product.product.id,
    )
    if (sameProductIndex >= 0) {
      dispatch(editProductOnCartAction(product))
      return
    }
    dispatch(addProductToCartAction(product))
  }

  const editProductOnCart = (product: SelectedProduct) => {
    const sameProductIndex = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.product.id === product.product.id,
    )
    if (sameProductIndex >= 0) {
      dispatch(editProductOnCartAction(product))
    }
  }

  const removeProductFromCart = (product: SelectedProduct) => {
    const sameProductIndex = selectedProducts.findIndex(
      (selectedProduct) => selectedProduct.product.id === product.product.id,
    )
    if (sameProductIndex >= 0) {
      dispatch(removeProductFromCartAction(product))
    }
  }

  const navigate = useNavigate()

  const finishOrder = (data: CreateOrderData) => {
    dispatch(finishOrderAction(data))
    navigate('/order')
  }

  return (
    <CoffeesContext.Provider
      value={{
        availableProducts,
        selectedProducts,
        addProductToCart,
        editProductOnCart,
        removeProductFromCart,
        finishOrder,
        orderData,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
