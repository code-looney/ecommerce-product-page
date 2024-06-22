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
import LightBoxFullSize from "./components/LightBoxFullSize"
import {loadStripe} from "@stripe/stripe-js";
import ImageThumbnailSelector from "./ImageThumbnailSelector"
import ImageNavigationControls from "./ImageNavigationControls"


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
  const [removeCartBasket, setRemoveCartBasket] = useState('hidden');
  const [toggleLightBoxFullSize, setToggleLightBoxFullSize] = useState('hidden'); 
  const [iconCounter, setIconCounter] = useState(null);
  const [iconCounterHidden, setIconCounterHidden] = useState("");

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

  function handleAddToCart() {
    if (count >= 1) {
      setIconCounter(count)
      setRemoveCartBasket('block')
    } else { 
      setRemoveCartBasket('hidden')
    }
  }

  function handleDeleteClick() {
    setCount(prev => prev - 1)
    setIconCounter(count - 1)
    // setIconCounterHidden("hidden")
  } // test

  const stripeLoadedPromise = loadStripe('pk_test_51PSe9GRt2agVgr5bbuM6jmZambGkXtK21QTekrKcXwSDxRzKaefcAMtAJHdad3eRfjN6SwXKpbjOZYBZa6dxXTt000EEQfO1iX');

  function handleClick(event) {
    stripeLoadedPromise.then(stripe => {
      stripe.redirectToCheckout({
        lineItems: [{
          price: 'price_1PT3zLRt2agVgr5bl99agIWu',
          quantity: 1,
        }],
        mode: 'payment',
        successUrl: 'https://ecommerce-product-page-1001.netlify.app/',
        cancelUrl: 'https://ecommerce-product-page-1001.netlify.app/',
      }).then(response => {
        // this will only log if the redirect did not work
        console.log(response.error);
      }).catch(error => {
        // wrong API key? you will see the error message here
        console.log(error);
      });
    });
  };  

  
  return (
    <>
    <Container className="h-screen pb-[800px] md:pb-0 overflow-hidden">
      <Header iconCounterHidden={iconCounterHidden} iconCounter={iconCounter} count={count} removeCartBasket={removeCartBasket} setRemoveCartBasket={setRemoveCartBasket} />
      <Container className="hidden md:flex justify-center w-full px-[240px]">
        <Rule className="md:w-full"/>
      </Container>
      <Container className="w-full md:flex md:h-[650px] md:items-center justify-center md:gap-20">
        <Container className="md:w-96 w-full relative md:flex md:flex-col md:justify-between md:h-[500px] md:p-0">
          <Lightbox onClick={() => setToggleLightBoxFullSize('block')} src={`/images/image-product-${image}.jpg`} className="md:rounded-xl w-full h-[330px] md:h-[380px] object-cover" />
          {/* check if the cart w/h dimensions are correct */}

          {/* morgen gaan we oplossen hoe we de product in the basket alleen count wanneer je op add to basket clicked en niet wanner een product in de basket is en we de count vehogen niet auto aanpast
          want op dit moment verbergen we alleen de procut en telt het product verborgen op!!! */}


          <CartBasket count={count} iconCounter={iconCounter} price={price} onDeleteClick={handleDeleteClick} onHandleClick={handleClick} className={`${removeCartBasket} absolute shadow-2xl z-20 h-[85%] md:h-[50%] w-[95%] justify-start flex-col flex top-[7%] left-[2.5%] m-auto bg-white rounded-lg translate-y-[-4%] md:translate-y-[-50%] md:translate-x-[200%]`}></CartBasket>
          <ImageThumbnailSelector onSelectedImage={handleSelectedImage} selectImage={selectImage} borderColor1={borderColor1} borderColor2={borderColor2} borderColor3={borderColor3} borderColor4={borderColor4} opacity1={opacity1} opacity2={opacity2} opacity3={opacity3} opacity4={opacity4} />
          <ImageNavigationControls image={image} onPrevImageClick={hamdlePrevImageClick} onHandleClick={hamdleNextImageClick} />


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
                    {/* { console.log(crypto.randomUUID() )} 
                    give product/products a unique*/}
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
                              <Icon src="/images/icon-minus.svg" />
                            </Button>
                          </Container>
                          <Counter>{count}</Counter>
                          <Container className="flex items-center">
                            <Button onClick={handleAddProduct}>
                              <Icon src="/images/icon-plus.svg" />
                            </Button>
                          </Container>
                        </Container>
                      </Container>
                        <Container className="flex justify-center text-white font-bold w-full">
                          <Button onClick={() => handleAddToCart()} className="flex gap-3 items-center bg-orange w-full mx-5 md:w-60 justify-center py-3 rounded-lg"><HiOutlineShoppingCart className="" />Add to cart</Button>

                          {/* kom hier terug om de producten toe te voegen met the add button en niet per count */}
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
    <LightBoxFullSize className={`${toggleLightBoxFullSize} absolute top-0 flex justify-center w-full h-full items-center bg-black bg-opacity-70 z-50`}>
    <Container className=" translate-y-[-260px] translate-x-[450px]">
      <Button onClick={() => setToggleLightBoxFullSize('hidden')}><RxCross1 className="text-orange" /></Button>
    </Container>
        <Container className="md:w-[450px] relative md:flex md:flex-col md:justify-between md:h-[550px] gap-10 translate-y-10">          
          {/* check de thumbnails positie nogmaals (hij valt uit de div)*/}
          <Lightbox src={`/images/image-product-${image}.jpg`} className="md:rounded-xl w-full md:h-full object-cover" />
          {/* check if the cart w/h dimensions are correct */}
          <Container className="md:flex flex-row justify-center gap-6 relative z-20">
            {selectImage && selectImage.map((item, index) => {
              return (
                <Container key={item.id} className="flex items-center translate-y-[-6px]">
                  {/* dit zijn de thumbnail border colors...*/}
                  <Button className={`rounded-xl bg-white w-[70px] ${item.id === 1 ? borderColor1 : ""} ${item.id === 2 ? borderColor2 : ""} ${item.id === 3 ? borderColor3 : ""} ${item.id === 4 ? borderColor4 : ""}`} onClick={() => handleSelectedImage(item.id, index)}>
                                      {/* maak de tweede lightbox/thumbnails onafhankelijk...*/}

                  {/* dit zijn de thumbnail opacities...*/}
                        <Thumbnail className={`rounded-xl hover:opacity-50 ${item.id === 1 ? opacity1 : ""} ${item.id === 2 ? opacity2 : ""} ${item.id === 3 ? opacity3 : ""} ${item.id === 4 ? opacity4 : ""}`} src={`/images/image-product-${item.image}-thumbnail.jpg`} />
                  </Button>
                  </Container>
              )
            })}
          </Container>
          <Container className="absolute z-10  h-[80%] n justify-between items-center flex w-full px-3">
                  {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}

            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full translate-x-[-30px] ">
                  {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}

              <ButtonIcon disabled={image === 1 ? true : false} onClick={hamdlePrevImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-previous.svg" />
            </Container>
            <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full  translate-x-[30px] ">
                  {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}

              <ButtonIcon disabled={image === 4 ? true : false} onClick={hamdleNextImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-next.svg" />
            </Container>
          </Container>
        </Container>
    </LightBoxFullSize>
  </>
  )
}