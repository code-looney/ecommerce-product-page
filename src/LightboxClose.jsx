import React from 'react'
import Container from './components/Container';
import Button from './components/Button';
import { RxCross1 } from "react-icons/rx";


const LightboxClose = (props) => {
    const {setToggleLightBoxFullSize} = props;
  return (
    <Container className=" translate-y-[-260px] translate-x-[450px]">
    <Button onClick={() => setToggleLightBoxFullSize('hidden')}><RxCross1 className="text-orange" /></Button>
    </Container>
  )
}

export default LightboxClose