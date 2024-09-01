import {
  CoffeeList,
  HomeContainer,
  Intro,
  IntroItem,
  TitleArea,
} from './styles'
import homeImage from './../../assets/images/home-image.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ProductHomeCard } from './components/ProductHomeCard'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Home() {
  const { availableProducts } = useContext(CoffeesContext)
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
              <IntroItem introitemcolor={'yellow-dark'}>
                <ShoppingCart size={20} />
              </IntroItem>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IntroItem introitemcolor={'black'}>
                <Package size={20} />
              </IntroItem>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IntroItem introitemcolor={'yellow'}>
                <Timer size={20} />
              </IntroItem>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IntroItem introitemcolor={'purple'}>
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
        {availableProducts.map((coffee) => {
          return <ProductHomeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeeList>
    </HomeContainer>
  )
}
