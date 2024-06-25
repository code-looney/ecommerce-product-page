import React from 'react'
import Container from './components/Container'
import Lightbox from './components/Lightbox'
import ButtonIcon from './components/ButtonIcon'
import Button from './components/Button'
import Thumbnail from './components/Thumbnail'

const LightboxContainer = (props) => {
  const {image, setImage, selectImage, borderColor1, borderColor2, borderColor3, borderColor4, 
    opacity1, opacity2, opacity3, opacity4} = props

  return (
    <Container className="md:w-[450px] relative md:flex md:flex-col md:justify-between md:h-[550px] gap-10 translate-y-10">          
    {/* check de thumbnails positie nogmaals (hij valt uit de div)*/}
    <Lightbox src={`public/images/image-product-${image}.jpg`} className="md:rounded-xl w-full md:h-full object-cover" />
    {/* check if the cart w/h dimensions are correct */}
    <Container className="md:flex flex-row justify-center gap-6 relative z-20">
      {selectImage && selectImage.map((item, index) => {
        return (
          <Container key={item.id} className="flex items-center translate-y-[-6px]">
            {/* dit zijn de thumbnail border colors...*/}
            <Button className={`rounded-xl bg-white w-[70px] ${item.id === 1 ? borderColor1 : ""} ${item.id === 2 ? borderColor2 : ""} ${item.id === 3 ? borderColor3 : ""} ${item.id === 4 ? borderColor4 : ""}`} onClick={() => props.onSelectedImage(item.id, index)}>
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

        <ButtonIcon disabled={image === 1 ? true : false} onClick={() => props.onPrevImageClick()} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-previous.svg" />
      </Container>
      <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full  translate-x-[30px] ">
            {/* refactor de next en prev zodat het accuraat in het midden komt te staan */}
        <ButtonIcon disabled={image === 4 ? true : false} onClick={() => props.onNextImageClick()} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-next.svg" />
      </Container>
    </Container>
  </Container>
  )
}

export default LightboxContainer