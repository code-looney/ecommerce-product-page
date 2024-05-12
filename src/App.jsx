import { useEffect, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import Lightbox from "./components/Lightbox"
import Rule from "./components/Rule"
import ButtonIcon from "./components/ButtonIcon"
import Title from "./components/Title"
import Sub from "./components/Sub"
import Paragraph from "./components/Paragraph"
import BasePrice from "./components/BasePrice"
import Sale from "./components/Sale"
import FullPrice from "./components/FullPrice"

export default function App() {
  const [price, setPrice] = useState(null)
  const [discount, setDiscount] = useState(50)
  const [nextImage, setNextImage] = useState(null)
  const [prevImage, setPrevImage] = useState(null)
  const [disable, setDisable] = useState(false)
  const [image, setImage] = useState(1)


  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        setPrice(data)
    })
  }, [])


  function hamdleNextImageClick() {
      setImage(image + 1)

      // if (image === 4) { // This repeating the cycle from 4 to 1
      // dont forget to adjust the disabled button 
      //   setImage(1)
      // } else {
      //   setImage(image + 1)
      // }
  }

   function hamdlePrevImageClick() {
      setImage(image - 1)
  }

  return (
    <Container>
      <Header />
      <Container className="hidden md:flex justify-center w-full px-[80px]">
        <Rule  className="md:w-full"/>
      </Container>
      <Container className="w-full">
        <Container className="md:w-96 w-full relative">
          <Lightbox src={`public/images/image-product-${image}.jpg`} className="md:rounded-xl w-full h-[340px] object-cover" />
          <Container className="absolute top-[45%] flex justify-between w-full px-3">
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
              <ButtonIcon disabled={image === 1 ? true : false} onClick={hamdlePrevImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-previous.svg" />
            </Container>
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
              <ButtonIcon disabled={image === 4 ? true : false} onClick={hamdleNextImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-next.svg" />
            </Container>
          </Container>
        </Container>
        <Container className="h-[250px] flex items-center">
          <Container className="px-5 w-full flex flex-col gap-3">
            <Title className="uppercase font-bold text-[14px] text-orange hsl(26, 100%, 55%)]">Sneaker Company</Title>
            <Sub className="text-[32px] font-bold tracking-wide leading-9">Fall Limited Edition<br />Sneakers</Sub>
            <Paragraph className="text-lightGrayish text-[14px] tracking-wider leading-6">These low-profile sneakers are your perfect <br /> casual wear companion. Featuring a 
              durable <br /> rubber outer sole, they’ll withstand everything <br /> the weather can offer.</Paragraph>
          </Container>
        </Container>
        <Container className="flex flex-col gap-5">
          {price && price.map(item => {
           return (
              <Container className="flex gap-5">
                <BasePrice key={item.id}>{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2)}`}</BasePrice>
                <Sale>{item.sale}</Sale>
                <FullPrice className="line-through">${item.price.toFixed(2)}</FullPrice>
              </Container>
           )
          })}
          
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