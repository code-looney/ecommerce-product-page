import Container from "./components/Container"
import Header from "./components/Header"
import Rule from "./components/Rule"

export default function App() {
  return (
    <Container>
      <Header />
      <Container className="hidden md:flex justify-center w-full px-[80px]">
        <Rule  className="md:w-full"/>
      </Container>
    </Container>
  )
}