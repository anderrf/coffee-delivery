import {
  CoffeeList,
  HomeContainer,
  Intro,
  IntroItem,
  TitleArea,
} from './styles'
import homeImage from './../../assets/images/home-image.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'
import { Product } from './components/Product'

export enum CoffeeTag {
  TRADICIONAL = 'TRADICIONAL',
  GELADO = 'GELADO',
  COM_LEITE = 'COM LEITE',
  ESPECIAL = 'ESPECIAL',
  ALCOOLICO = 'ALCOÓLICO',
}

export interface CoffeeProduct {
  id: string
  title: string
  description: string
  tags: CoffeeTag[]
  unitPrice: number
  image: string
}

const fixedCoffees: CoffeeProduct[] = [
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
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
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

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <TitleArea>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <section>
            <div>
              <IntroItem intoitemcolor={'yellow-dark'}>
                <ShoppingCart size={20} />
              </IntroItem>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IntroItem intoitemcolor={'black'}>
                <Package size={20} />
              </IntroItem>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IntroItem intoitemcolor={'yellow'}>
                <Timer size={20} />
              </IntroItem>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IntroItem intoitemcolor={'purple'}>
                <Coffee size={20} />
              </IntroItem>
              <span>O café chega fresquinho até você</span>
            </div>
          </section>
        </TitleArea>
        <img src={homeImage}></img>
      </Intro>
      <h2>Nossos cafés</h2>
      <CoffeeList>
        {fixedCoffees.map((coffee) => {
          return <Product key={coffee.id} coffee={coffee} />
        })}
      </CoffeeList>
    </HomeContainer>
  )
}
