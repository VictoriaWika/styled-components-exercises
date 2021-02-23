import { useState } from 'react'
import styled from 'styled-components'
import AppHeader from './AppHeader'
import Button from './Button'

export default function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      <AppHeader title={'Hi Hacker!'} subtitle={"How's it going?"} />
      <Button onClick={() => setIsVisible(!isVisible)}>Button</Button>
      <FilterButton>Filter Button</FilterButton>

    </div>
  )
}

const FilterButton = styled(Button)`
  background-color: black;
  color: white;
`
