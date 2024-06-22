import React from 'react'
import Container from './components/Container';
import ButtonIcon from './components/ButtonIcon';

const ImageNavigationControls = (props) => {
    const {image} = props;
  return (
    <Container className="absolute z-10 md:hidden h-full justify-between items-center flex top-0 w-full px-3">
        <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full md:hidden">
        <ButtonIcon disabled={image === 1 ? true : false} onClick={props.onPrevImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-previous.svg" />
        </Container>
        <Container className="bg-white w-10 h-10 flex items-center justify-center rounded-full md:hidden">
        <ButtonIcon disabled={image === 4 ? true : false} onClick={props.onNextImageClick} className="bg-white w-3 h-4 flex items-center justify-center rounded-full" classnameiconbtn="w-full h-full rounded-full flex justify-center items-center" src="/images/icon-next.svg" />
        </Container>
    </Container>
  )
}

export default ImageNavigationControls