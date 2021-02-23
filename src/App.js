/*
 * I added a state 'isVisible' and an onClick
 * to our button.
 *
 * The subtitle should not be visible after a click.
 * For this you need to pass the prop to your header
 * component.
 *
 * The button should change on hover.
 *
 * Don't forget to import 'styled-components/macro'!
 */

import { useState } from 'react'
import AppHeader from './AppHeader'
import Button from './Button'

export default function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      <AppHeader title={'Hi Hacker!'} subtitle={"How's it going?"} />
      <Button onClick={() => setIsVisible(!isVisible)}>Button</Button>
    </div>
  )
}
