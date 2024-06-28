import React, { useEffect, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import Rule from "./components/Rule"
import LightBoxFullSize from "./components/LightBoxFullSize"
import {loadStripe} from "@stripe/stripe-js";
import LightboxClose from "./LightboxClose"
import LightboxContainer from "./LightboxContainer"
import Lightbox from './components/Lightbox'
import CartBasket from './components/CartBasket'
import ImageNavigationControls from "./ImageNavigationControls"
import ProductPriceDetails from "./ProductPriceDetails"
import ImageThumbnailSelector from "./ImageThumbnailSelector"

export default function App() {
  const [count, setCount] = useState(0); 
  const [price, setPrice] = useState(null)
  const [image, setImage] = useState(1)
  const [imageLightbox, setImageLightbox] = useState(1)
  const [selectImage, setSelectImage] = useState(null)
  const [selectedImageLightbox, setSelectedImageLightbox] = useState(null)
  const [removeCartBasket, setRemoveCartBasket] = useState('hidden');
  const [toggleLightBoxFullSize, setToggleLightBoxFullSize] = useState('hidden'); 
  const [iconCounter, setIconCounter] = useState(null);
  const [iconCounterHidden, setIconCounterHidden] = useState("");


  const [opacity1, setOpacity1] = useState("opacity-30")
  const [opacity2, setOpacity2] = useState(null)
  const [opacity3, setOpacity3] = useState(null)
  const [opacity4, setOpacity4] = useState(null)

  const [opacity1Lightbox, setOpacity1Lightbox] = useState("opacity-30")
  const [opacity2Lightbox, setOpacity2Lightbox] = useState(null)
  const [opacity3Lightbox, setOpacity3Lightbox] = useState(null)
  const [opacity4Lightbox, setOpacity4Lightbox] = useState(null)


  const [borderColor1, setBorderColor1] = useState("outline outline-orange")
  const [borderColor2, setBorderColor2] = useState(null)
  const [borderColor3, setBorderColor3] = useState(null)
  const [borderColor4, setBorderColor4] = useState(null)

  const [borderColor1Lightbox, setBorderColor1Lightbox] = useState("outline outline-orange")
  const [borderColor2Lightbox, setBorderColor2Lightbox] = useState(null)
  const [borderColor3Lightbox, setBorderColor3Lightbox] = useState(null)
  const [borderColor4Lightbox, setBorderColor4Lightbox] = useState(null)

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
      console.log(data)
        setSelectImage(data)
        setSelectedImageLightbox(data)
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


  function handleSelectedImageLightbox(id) {
    if (selectedImageLightbox[0].imageLightbox === id) {
      setOpacity1Lightbox("opacity-30") // dit is de thumbnail opacities...
      setOpacity2Lightbox("")
      setOpacity3Lightbox("")
      setOpacity4Lightbox("")

      setBorderColor1Lightbox("outline outline-orange"); // dit is de thumbnail border color...
      setBorderColor2Lightbox("");
      setBorderColor3Lightbox("");
      setBorderColor4Lightbox("");

      setImageLightbox(1);
    } else if (selectedImageLightbox[1].imageLightbox === id) {
      setOpacity1Lightbox("")
      setOpacity2Lightbox("opacity-30")
      setOpacity3Lightbox("")
      setOpacity4Lightbox("")

      setBorderColor1Lightbox("");
      setBorderColor2Lightbox("outline outline-orange");
      setBorderColor3Lightbox("");
      setBorderColor4Lightbox("");

      setImageLightbox(2);
    } else if (selectedImageLightbox[2].imageLightbox === id) {
      setOpacity1Lightbox("")
      setOpacity2Lightbox("")
      setOpacity3Lightbox("opacity-30")
      setOpacity4Lightbox("")

      setBorderColor1Lightbox("");
      setBorderColor2Lightbox("");
      setBorderColor3Lightbox("outline outline-orange");
      setBorderColor4Lightbox("");


      setImageLightbox(3);
    } else if (selectedImageLightbox[3].imageLightbox === id) {
      setOpacity1Lightbox("")
      setOpacity2Lightbox("")
      setOpacity3Lightbox("")
      setOpacity4Lightbox("opacity-30")

      setBorderColor1Lightbox("");
      setBorderColor2Lightbox("");
      setBorderColor3Lightbox("");
      setBorderColor4Lightbox("outline outline-orange");

      setImageLightbox(4);
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


  function handleNextImageClick() {
      setImage(prev => prev + 1)
      setImageLightbox(prev => prev + 1)

  }

   function handlePrevImageClick() {
    setImage(prev => prev - 1)
    setImageLightbox(prev => prev - 1)
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
  }

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
    <Container className="w-full md:flex md:h-[650px] md:items-center justify-center md:gap-20">
      <Container className="md:w-96 w-full relative md:flex md:flex-col md:justify-between md:h-[500px] md:p-0">
          <Lightbox 
          onClick={() => setToggleLightBoxFullSize('block')} 
          src={`/images/image-product-${image}.jpg`} 
          className="md:rounded-xl w-full h-[330px] md:h-[380px] object-cover" />
          {/* check if the cart w/h dimensions are correct */}

          {/* morgen gaan we oplossen hoe we de product in the basket alleen count wanneer je op add to basket clicked en niet wanner een product in de basket is en we de count vehogen niet auto aanpast
          want op dit moment verbergen we alleen de procut en telt het product verborgen op!!! */}


          <CartBasket count={count} 
            iconCounter={iconCounter} 
            price={price} 
            setRemoveCartBasket={setRemoveCartBasket}
            onDeleteClick={handleDeleteClick} 
            onHandleClick={handleClick} 
            className={`${removeCartBasket} absolute shadow-2xl z-20 h-[85%] md:h-[50%] w-[95%] justify-start flex-col flex top-[7%] left-[2.5%] m-auto bg-white rounded-lg translate-y-[-4%] md:translate-y-[-50%] md:translate-x-[200%]`}>
          </CartBasket>
          <ImageThumbnailSelector 
            onSelectedImage={handleSelectedImage} 
            selectImage={selectImage} 
            borderColor1={borderColor1} 
            borderColor2={borderColor2} 
            borderColor3={borderColor3} 
            borderColor4={borderColor4} 
            opacity1={opacity1} 
            opacity2={opacity2} 
            opacity3={opacity3} 
            opacity4={opacity4} />
          <ImageNavigationControls 
            image={image} 
            onPrevImageClick={handlePrevImageClick} 
            onNextImageClick={handleNextImageClick} />
      </Container>

    <ProductPriceDetails 
      count={count} 
      price={price} 
      onAddToCart={handleAddToCart} 
      onAddProduct={handleAddProduct} 
      onSubProduct={handleSubProduct} />
  </Container>
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

          borderColor1Lightbox={borderColor1Lightbox} 
          borderColor2Lightbox={borderColor2Lightbox} 
          borderColor3Lightbox={borderColor3Lightbox} 
          borderColor4Lightbox={borderColor4Lightbox} 
          opacity1Lightbox={opacity1Lightbox} 
          opacity2Lightbox={opacity2Lightbox} 
          opacity3Lightbox={opacity3Lightbox} 
          opacity4Lightbox={opacity4Lightbox}  

          selectImage={selectImage} 
          image={image} 
          setImage={setImage}
          imageLightbox={imageLightbox}
          setImageLightbox={setImageLightbox} 
          onPrevImageClick={handlePrevImageClick} 
          onNextImageClick={handleNextImageClick}
          selectedImageLightbox={selectedImageLightbox}
          onSelectedImageLightbox={handleSelectedImageLightbox}
          onSelectedImage={handleSelectedImage} />
        </LightBoxFullSize>
    </>
  )
}