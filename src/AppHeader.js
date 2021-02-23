import styled from 'styled-components/macro'

export default function AppHeader({ title, subtitle, isVisible }) {
  return (
    <Header isVisible={isVisible}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </Header>
  )
}

const Header = styled.header`
  background-color: white;
  color: royalblue;

  p {
    ${(props) => (props.isVisible ? '' : 'display: none;')}
  }
`
