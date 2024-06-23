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
import CartBasket from "./components/CartBasket"
import LightBoxFullSize from "./components/LightBoxFullSize"
import {loadStripe} from "@stripe/stripe-js";
import ImageThumbnailSelector from "./ImageThumbnailSelector"
import ImageNavigationControls from "./ImageNavigationControls"
import ProductPriceDetails from "./ProductPriceDetails"
import LightboxClose from "./LightboxClose"


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

        <ProductPriceDetails count={count} price={price} onAddToCart={handleAddToCart} onAddProduct={handleAddProduct} onSubProduct={handleSubProduct} />
        
      </Container>
    </Container>
    <LightBoxFullSize className={`${toggleLightBoxFullSize} absolute top-0 flex justify-center w-full h-full items-center bg-black bg-opacity-70 z-50`}>
          {/* begin */}
          <LightboxClose setToggleLightBoxFullSize={setToggleLightBoxFullSize} />
          {/* end */}
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