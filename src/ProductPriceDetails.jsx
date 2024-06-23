import React from 'react'
import Container from './components/Container'
import BasePrice from './components/BasePrice';
import Sale from './components/Sale';
import FullPrice from './components/FullPrice';
import Button from './components/Button';
import Icon from './components/Icon';
import Counter from './components/Counter';
import { HiOutlineShoppingCart } from "react-icons/hi";
import Paragraph from './components/Paragraph';
import Title from './components/Title';
import Sub from './components/Sub';

const ProductPriceDetails = (props) => {
    const {price, count} = props;

    {/* de error heeft te maken met onclick calls gebruik altijd een error function */}
  return (
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
                            <Button disabled={count === 0 ? true : false} onClick={() => props.onSubProduct()}>
                              <Icon src="/images/icon-minus.svg" />
                            </Button>
                          </Container>
                          <Counter>{count}</Counter>
                          <Container className="flex items-center">
                            <Button onClick={() => props.onAddProduct()}>
                              <Icon src="/images/icon-plus.svg" />
                            </Button>
                          </Container>
                        </Container>
                      </Container>
                        <Container className="flex justify-center text-white font-bold w-full">
                          <Button onClick={() => props.onAddToCart()} className="flex gap-3 items-center bg-orange w-full mx-5 md:w-60 justify-center py-3 rounded-lg"><HiOutlineShoppingCart className="" />Add to cart</Button>

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
           
        )
    }

export default ProductPriceDetails