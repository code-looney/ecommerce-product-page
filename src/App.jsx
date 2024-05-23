import React, { useEffect, useState } from "react"
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
import Counter from "./components/Counter"
import Icon from "./components/Icon"
import Button from "./components/Button"
import Thumbnail from "./components/Thumbnail"
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function App() {
  const [count, setCount] = useState(0);
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

  function handleAddProduct() {
      setCount(prev => prev + 1)
  }

    function handleSubProduct() {
      if (count > 0) {
        setCount(prev => prev - 1)
      }
  }


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
    <Container className="h-screen pb-[950px] md:pb-0 outline">
      <Header />
      <Container className="hidden md:flex justify-center w-full px-[240px]">
        <Rule  className="md:w-full"/>
      </Container>
      <Container className="w-full md:flex h-screen md:h-[550px] md:items-center justify-center md:gap-20">
        <Container className="md:w-96 w-full relative md:flex-col">
          <Lightbox src={`public/images/image-product-${image}.jpg`} className="md:rounded-xl w-full h-[400px] object-cover" />
          <Container className="absolute top-[45%] flex justify-between w-full px-3">
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full md:hidden">
              <ButtonIcon disabled={image === 1 ? true : false} onClick={hamdlePrevImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-previous.svg" />
            </Container>
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full md:hidden">
              <ButtonIcon disabled={image === 4 ? true : false} onClick={hamdleNextImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="public/images/icon-next.svg" />
            </Container>
          </Container>
        </Container>
        <Container className="flex justify-center">
          <Container>
            <Container className="h-[250px] md:flex flex-col items-center pt-5 md:justify-center">
              <Container className="px-5 w-full flex flex-col gap-3 pb-5">
                <Title className="uppercase font-bold text-[14px] text-orange hsl(26, 100%, 55%)]">Sneaker Company</Title>
                <Sub className="text-[32px] font-bold tracking-wide leading-9">Fall Limited Edition<br />Sneakers</Sub>
                <Paragraph className="text-darkGrayish text-[14px] tracking-wider leading-6">These low-profile sneakers are your perfect <br /> casual wear companion. Featuring a
                  durable <br /> rubber outer sole, they’ll withstand everything <br /> the weather can offer.</Paragraph>
              </Container>
              <Container className="flex flex-col">
              {price && price.map(item => {
                 // dynamic id plaatsen / leren
               return (
                  <Container key={item.id} className="flex flex-col">
                    { console.log(crypto.randomUUID() )}
                    <Container>
                      <Container className="px-5 flex justify-between w-full items-center mb-5 md:flex-col md:justify-start md:items-start">
                        <Container className="flex gap-5 items-center">
                          <BasePrice className="font-bold text-[24px]">{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2)}`}</BasePrice>
                          <Sale className="text-orange bg-paleOrange rounded-md px-2 font-bold text-[14px]">{item.sale}%</Sale>
                        </Container>
                        <FullPrice className="line-through text-grayishBlue font-bold md:text-[12px]">${item.price.toFixed(2)}</FullPrice>
                      </Container>
                    </Container>
                    <Container className="flex flex-col gap-3 md:flex-row pt-0 md:pt-3">
                      <Container className="w-full flex justify-center">
                        <Container className="flex justify-between items-center px-5 w-80 md:w-32 py-2 rounded-lg bg-lightGrayishBlue ">
                          <Container className="flex items-center">
                            <Button disabled={count === 0 ? true : false} onClick={handleSubProduct}>
                              <Icon src="public/images/icon-minus.svg" />
                            </Button>
                          </Container>
                          <Counter>{count}</Counter>
                          <Container className="flex items-center">
                            <Button onClick={handleAddProduct}>
                              <Icon src="public/images/icon-plus.svg" />
                            </Button>
                          </Container>
                        </Container>
                      </Container>
                        <Container className="flex justify-center text-white font-bold">
                          <Button className="flex gap-3 items-center bg-orange w-80 md:w-60 justify-center py-3 rounded-lg"><HiOutlineShoppingCart className="" />Add to cart</Button>
                        </Container>
                        </Container>
                    </Container>
               )
              })}
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}