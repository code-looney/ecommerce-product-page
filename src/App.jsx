import Container from "./components/Container"
import Header from "./components/Header"
import Lightbox from "./components/Lightbox"
import Rule from "./components/Rule"
import ButtonIcon from "./components/ButtonIcon"

export default function App() {
  return (
    <Container>
      <Header />
      <Container className="hidden md:flex justify-center w-full px-[80px]">
        <Rule  className="md:w-full"/>
      </Container>
      <Container className="w-full">
        <Container className="md:w-96 w-full outline relative">
          <Lightbox src="public/images/image-product-1.jpg" className="md:rounded-xl w-full h-[340px] object-cover" />
          <Container className="absolute top-[45%] flex justify-between w-full px-3">
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
              <ButtonIcon className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-previous.svg" />
            </Container>
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
              <ButtonIcon className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-next.svg" />
            </Container>
          </Container>
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