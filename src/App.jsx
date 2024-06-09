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
import CartBasket from "./components/CartBasket"
import { RxCross1 } from "react-icons/rx";
import Amount from "./components/Amount"


export default function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(null)
  const [amount, setAmount] = useState(null)

  const [discount, setDiscount] = useState(50)
  const [nextImage, setNextImage] = useState(null)
  const [prevImage, setPrevImage] = useState(null)
  const [disable, setDisable] = useState(false)
  const [image, setImage] = useState(1)
  const [selectImage, setSelectImage] = useState(null)
  const [removeCartBasket, setRemoveCartBasket] = useState('block');

  const [opacity1, setOpacity1] = useState("opacity-30")
  const [opacity2, setOpacity2] = useState(null)
  const [opacity3, setOpacity3] = useState(null)
  const [opacity4, setOpacity4] = useState(null)

  const [borderColor1, setBorderColor1] = useState("outline outline-orange")
  const [borderColor2, setBorderColor2] = useState(null)
  const [borderColor3, setBorderColor3] = useState(null)
  const [borderColor4, setBorderColor4] = useState(null)


  useEffect(() => {
    fetch("./data.json")
    .then(res => res.json())
    .then(data => {
        setPrice(data)
    })
  }, [])

  useEffect(() => {
    fetch("selectImage.json")
    .then(res => res.json())
    .then(data => {
      setSelectImage(data)
    })
  }, [])

  function handleSelectedImage(id) {
    if (selectImage[0].image === id) {
      setOpacity1("opacity-30") // dit is de thumbnail opacities...
      setOpacity2("")
      setOpacity3("")
      setOpacity4("")

      setBorderColor1("outline outline-orange"); // dit is de thumbnail border color...
      setBorderColor2("");
      setBorderColor3("");
      setBorderColor4("");
      setImage(1);
    } else if (selectImage[1].image === id) {
      setOpacity1("")
      setOpacity2("opacity-30")
      setOpacity3("")
      setOpacity4("")

      setBorderColor1("");
      setBorderColor2("outline outline-orange");
      setBorderColor3("");
      setBorderColor4("");

      setImage(2);
    } else if (selectImage[2].image === id) {
      setOpacity1("")
      setOpacity2("")
      setOpacity3("opacity-30")
      setOpacity4("")

      setBorderColor1("");
      setBorderColor2("");
      setBorderColor3("outline outline-orange");
      setBorderColor4("");

      setImage(3)
    } else if (selectImage[3].image === id) {
      setOpacity1("")
      setOpacity2("")
      setOpacity3("")
      setOpacity4("opacity-30")

      setBorderColor1("");
      setBorderColor2("");
      setBorderColor3("");
      setBorderColor4("outline outline-orange");
      setImage(4)
    }
  } 

  //   function handleOpacityClick(id) {
  //     if (selectImage[0].opacity1 === id) {
  //       setOpacity("opacity-30")
  //     }
  // } 
   
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
    <Container className="h-screen pb-[950px] md:pb-0">
      <Header removeCartBasket={removeCartBasket} setRemoveCartBasket={setRemoveCartBasket} />
      <Container className="hidden md:flex justify-center w-full px-[240px]">
        <Rule className="md:w-full"/>
      </Container>
      <Container className="w-full md:flex md:h-[650px] md:items-center justify-center md:gap-20">
        <Container className="md:w-96 w-full relative md:flex md:flex-col md:justify-between md:h-[500px] md:p-0">
          <Lightbox src={`public/images/image-product-${image}.jpg`} className="md:rounded-xl w-full h-[330px] md:h-[380px] object-cover" />
          {/* check if the cart w/h dimensions are correct */}
          <CartBasket className={`${removeCartBasket} absolute z-20 h-[85%] w-[95%] justify-start flex-col flex top-[7%] left-[2.5%] m-auto bg-white md:hidden rounded-lg translate-y-[-5%]`}>
            <Container className={`flex-col flex-1 flex`}>
              <Container className="w-full flex flex-col justify-center gap-5 pt-5">
                <Container className="w-full px-5 flex justify-between items-center">
                  <Title>Cart</Title>
                  <Button onClick={() => setRemoveCartBasket('hidden')}><Icon src="public/images/icon-close.svg" /></Button>
                </Container>
                  <Rule className="w-full" />
              </Container>
              <Container className="h-full w-full flex flex-col justify-center items-center px-6 gap-7"><Sub className="hidden">Your cart is empty.</Sub>
              <Container className="flex gap-4 items-center w-full"> {/* This is the basket product section */}
                <Thumbnail className="w-16 rounded-md" src="public/images/image-product-1-thumbnail.jpg" />
                <Container><Sub className="text-darkGrayish">Fall Limited Edition Sneakers</Sub>
                {price && price.map(item => { {/* This is the cartbasket product details */}
                  return (
                    <Container key={item.id} className="flex gap-1"><BasePrice  className="text-darkGrayish">{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2)}`}</BasePrice>
                    <Counter>x {count}</Counter>
                    <Amount>{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2) * count}`}</Amount> {/* refactor het optellen van de price naar een state amount */}
                    </Container>
                  )
                })}
                </Container>
                <Container><Icon src="public/images/icon-delete.svg" /></Container>
              </Container>
              <Container className="w-full flex justify-center"><Button className="bg-orange w-full py-4 rounded-lg text-white">Checkout</Button></Container>
              </Container>
            </Container>
          </CartBasket>
          <Container className="hidden md:flex flex-row justify-between gap-4">
            {selectImage && selectImage.map((item, index) => {
              return (
                <Container key={item.id}>
                  {/* dit zih de thumbnail border colors...*/}
                  <Button className={`rounded-xl ${item.id === 1 ? borderColor1 : ""} ${item.id === 2 ? borderColor2 : ""} ${item.id === 3 ? borderColor3 : ""} ${item.id === 4 ? borderColor4 : ""}`} onClick={() => handleSelectedImage(item.id, index)}>
                  {/* dit zijn de thumbnail opacities...*/}
                        <Thumbnail className={`rounded-xl hover:opacity-50 ${item.id === 1 ? opacity1 : ""} ${item.id === 2 ? opacity2 : ""} ${item.id === 3 ? opacity3 : ""} ${item.id === 4 ? opacity4 : ""}`} src={`public/images/image-product-${item.image}-thumbnail.jpg`} />
                  </Button>
                  </Container>
              )
            })}
          </Container>
          <Container className="absolute z-10 md:hidden h-full justify-between items-center flex top-0 w-full px-3">
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
              <Container className="px-5 w-full flex-col pb-5 md:flex gap-3 flex">
                  <Title className="uppercase font-bold text-[14px] text-orange hsl(26, 100%, 55%)]">Sneaker Company</Title>
                <Container className="flex-col flex gap-5 md:gap-7 md:flex">
                  <Sub className="text-[32px] font-bold tracking-wide leading-9">Fall Limited Edition <br className="hidden md:block" />Sneakers</Sub>
                <Paragraph className="text-darkGrayish text-[14px] tracking-wider leading-6">These low-profile sneakers are your perfect <br className="hidden md:block" /> casual wear companion. Featuring a
                  durable <br className="hidden md:block" />rubber outer sole, they’ll withstand everything <br className="hidden md:block" /> the weather can offer.</Paragraph>
                </Container>
              </Container>
              <Container className="flex flex-col">
              {price && price.map(item => {
                 // dynamic id plaatsen / leren !

               return (
                  <Container key={item.id} className="flex flex-col">
                    {/* { console.log(crypto.randomUUID() )} */}
                    <Container>
                      <Container className="px-5 flex justify-between w-full items-center mb-5 md:flex-col md:justify-start md:items-start">
                        <Container className="flex gap-5 items-center">
                          <BasePrice className="font-bold text-[24px]">{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2)}`}</BasePrice>
                          <Sale className="text-orange bg-paleOrange rounded-md px-2 font-bold text-[14px]">{item.sale}%</Sale>
                        </Container>
                        <FullPrice className="line-through text-grayishBlue font-bold md:text-[12px]">${item.price.toFixed(2)}</FullPrice>
                      </Container>
                    </Container>
                    <Container className="flex w-full  flex-col gap-3 md:flex-row pt-0 md:pt-3">
                      <Container className="w-full flex justify-center">
                        <Container className="flex justify-between items-center px-5 w-full md:w-32 py-2 rounded-lg bg-lightGrayishBlue  mx-5">
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
                        <Container className="flex justify-center text-white font-bold w-full">
                          <Button className="flex gap-3 items-center bg-orange w-full mx-5 md:w-60 justify-center py-3 rounded-lg"><HiOutlineShoppingCart className="" />Add to cart</Button>
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