import React from 'react'
import Container from './components/Container';
import Button from './components/Button';
import Thumbnail from './components/Thumbnail';

const ImageThumbnailSelector = (props) => {
    const {borderColor1, borderColor2, borderColor3, borderColor4, selectImage, 
        opacity1, opacity2, opacity3, opacity4
    } = props;
  return (
    <Container className="hidden md:flex flex-row justify-between gap-4">
    {selectImage && selectImage.map((item, index) => {
      return (
        <Container key={item.id}>
          {/* dit zijn de thumbnail border colors...*/}
          <Button className={`rounded-xl ${item.id === 1 ? borderColor1 : ""} ${item.id === 2 ? borderColor2 : ""} ${item.id === 3 ? borderColor3 : ""} ${item.id === 4 ? borderColor4 : ""}`} onClick={() => props.onSelectedImage(item.id, index)}>
          {/* dit zijn de thumbnail opacities...*/}
                <Thumbnail className={`rounded-xl hover:opacity-50 ${item.id === 1 ? opacity1 : ""} ${item.id === 2 ? opacity2 : ""} ${item.id === 3 ? opacity3 : ""} ${item.id === 4 ? opacity4 : ""}`} src={`/images/image-product-${item.image}-thumbnail.jpg`} />
          </Button>
          </Container>
      )
    })}
  </Container>
  )
}

export default ImageThumbnailSelector