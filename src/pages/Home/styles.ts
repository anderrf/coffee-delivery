import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Intro = styled.div`
  display: flex;
  flex-direction: row;

  margin: 3rem auto;
`

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;

  h1 {
    line-height: 1.3;
    font-size: 3rem;
    font-family: 'baloo 2', mono;
  }

  h2 {
    line-height: 1.3;
    font-size: 2rem;
    font-family: 'baloo 2', mono;
  }

  p {
    line-height: 1.3;
    font-size: 1.25rem;
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    margin: 2rem 0;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;

      font-size: 1rem;
      line-height: 1.3;
    }
  }
`

const INTRO_ITEMS_COLORS = {
  'yellow-dark': 'yellow-dark',
  black: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface IntroItemProps {
  intoitemcolor: keyof typeof INTRO_ITEMS_COLORS
}

export const IntroItem = styled.span<IntroItemProps>`
  background: ${(props) =>
    props.theme[INTRO_ITEMS_COLORS[props.intoitemcolor]]};
  color: ${(props) => props.theme.background};

  height: 2rem;
  width: 2rem;

  border-radius: 50%;
  margin-right: 1rem;

  display: flex;

  svg {
    margin: auto;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 4rem;
  margin-top: 3rem;
`
