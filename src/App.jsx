import React, { useEffect, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import Rule from "./components/Rule"
import LightBoxFullSize from "./components/LightBoxFullSize"
import {loadStripe} from "@stripe/stripe-js";
import LightboxClose from "./LightboxClose"
import LightboxContainer from "./LightboxContainer"
import ProductDisplay from "./ProductDisplay"


export default function App() {
  const [count, setCount] = useState(0); 
  const [price, setPrice] = useState(null)
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
      <Header 
      iconCounterHidden={iconCounterHidden} 
      iconCounter={iconCounter} 
      count={count} 
      removeCartBasket={removeCartBasket} 
      setRemoveCartBasket={setRemoveCartBasket} />
      <Container className="hidden md:flex justify-center w-full px-[240px]">
        <Rule className="md:w-full"/>
      </Container>
      <ProductDisplay />
    </Container>
        <LightBoxFullSize className={`${toggleLightBoxFullSize} absolute top-0 flex justify-center w-full h-full items-center bg-black bg-opacity-70 z-50`}>
        <LightboxClose setToggleLightBoxFullSize={setToggleLightBoxFullSize} />
        <LightboxContainer 
          borderColor1={borderColor1} 
          borderColor2={borderColor2} 
          borderColor3={borderColor3} 
          borderColor4={borderColor4} 
          opacity1={opacity1} 
          opacity2={opacity2} 
          opacity3={opacity3} 
          opacity4={opacity4} 
          selectImage={selectImage} 
          image={image} 
          setImage={setImage} 
          onPrevImageClick={hamdlePrevImageClick} 
          onNextImageClick={hamdleNextImageClick} />
        </LightBoxFullSize>
    </>
  )
}