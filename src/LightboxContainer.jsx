import React from 'react'
import Container from './components/Container'
import Lightbox from './components/Lightbox'
import ButtonIcon from './components/ButtonIcon'
import Button from './components/Button'
import Thumbnail from './components/Thumbnail'

const LightboxContainer = (props) => {
  const {imageLightbox, selectedImageLightbox, borderColor1Lightbox, borderColor2Lightbox, borderColor3Lightbox, borderColor4Lightbox, 
    opacity1Lightbox, opacity2Lightbox, opacity3Lightbox, opacity4Lightbox} = props

  return (
    <Container className="md:w-[450px] relative md:flex md:flex-col md:justify-between md:h-[550px] gap-10 translate-y-10">          
    {/* check de thumbnails positie nogmaals (hij valt uit de div)*/}
    <Lightbox src={`public/images/image-product-${imageLightbox}.jpg`} className="md:rounded-xl w-full md:h-full object-cover" />
    {/* check if the cart w/h dimensions are correct */}
    <Container className="md:flex flex-row justify-center gap-6 relative z-20">
      {selectedImageLightbox && selectedImageLightbox.map((item, index) => {
        return (
          <Container key={item.id} className="flex items-center translate-y-[-6px] md:block">
            {/* dit zijn de thumbnail border colors...*/}
            <Button className={`rounded-xl bg-white w-[70px] ${item.id === 1 ? borderColor1Lightbox : ""} ${item.id === 2 ? borderColor2Lightbox : ""} ${item.id === 3 ? borderColor3Lightbox : ""} ${item.id === 4 ? borderColor4Lightbox : ""}`} onClick={() => props.onSelectedImageLightbox(item.id, index)}>
              {/* maak de tweede lightbox/thumbnails onafhankelijk...*/}

            {/* dit zijn de thumbnail opacities...*/}
                  <Thumbnail className={`rounded-xl hover:opacity-50 ${item.id === 1 ? opacity1Lightbox : ""} ${item.id === 2 ? opacity2Lightbox : ""} ${item.id === 3 ? opacity3Lightbox : ""} ${item.id === 4 ? opacity4Lightbox : ""}`} src={`/images/image-product-${item.imageLightbox}-thumbnail.jpg`} />
            </Button>
            </Container>
        )
      })}
      {selectedImageLightbox && selectedImageLightbox.map((item, index) => {
        return (
          <Container key={item.id} className="absolute z-10 justify-between items-center flex w-full px-3 translate-y-[-270px">
              {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}

              <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full translate-x-[-30px] ">
              {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}

              <ButtonIcon disabled={imageLightbox === 1 ? true : false} onClick={() => props.onPrevImageClick(item.id, index)} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-previous.svg" />
              </Container>
              <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full  translate-x-[30px] ">
              {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}
              <ButtonIcon disabled={imageLightbox === 4 ? true : false} onClick={() => props.onNextImageClick(item.id, index)} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-next.svg" />
              </Container>
          </Container>
        )
      })}
    </Container>
  </Container>
  )
}

export default LightboxContainer
