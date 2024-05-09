import Container from "./components/Container"
import Header from "./components/Header"
import Lightbox from "./components/Lightbox"
import Rule from "./components/Rule"
import Thumbnail from "./components/Thumbnail"

export default function App() {
  return (
    <Container>
      <Header />
      <Container className="hidden md:flex justify-center w-full px-[80px]">
        <Rule  className="md:w-full"/>
      </Container>
      <Container className="w-full">
        <Container className="md:w-96 outline">
          <Lightbox src="public/images/image-product-1.jpg" className="md:rounded-xl h-96"></Lightbox>  
        </Container>
        {/* <Container>
          <Thumbnail src="public/images/image-product-1-thumbnail.jpg" />
          <Thumbnail src="public/images/image-product-2-thumbnail.jpg" />
          <Thumbnail src="public/images/image-product-3-thumbnail.jpg" />
          <Thumbnail src="public/images/image-product-4-thumbnail.jpg" />
        </Container> */}
      </Container>
    </Container>
  )
}