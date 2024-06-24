import React from 'react'
import Container from './components/Container'
import Lightbox from './components/Lightbox'
import CartBasket from './components/CartBasket'

const ProductDisplay = (props) => {
    const {image} = props;

  return (
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
        onPrevImageClick={hamdlePrevImageClick} 
        onHandleClick={hamdleNextImageClick} />
  </Container>

    <ProductPriceDetails 
      count={count} 
      price={price} 
      onAddToCart={handleAddToCart} 
      onAddProduct={handleAddProduct} 
      onSubProduct={handleSubProduct} />
</Container>
  )
}

export default ProductDisplay