import React from 'react'
import Container from './Container'
import Title from './Title';
import Button from './Button';
import Icon from './Icon';
import Rule from './Rule';
import Sub from './Sub';
import Thumbnail from './Thumbnail';
import BasePrice from './BasePrice';
import Counter from './Counter';
import Amount from './Amount';

const CartBasket = (props) => {
    const {children, count, iconCounter, price, setRemoveCartBasket, ...rest} = props;
    console.log(price)

  return (
    <Container {...rest}>
        <Container className={`flex-col flex-1 flex`}>
              <Container className="w-full flex flex-col justify-center gap-5 pt-5">
                <Container className="w-full px-5 flex justify-between items-center">
                  <Title>Cart</Title>
                  <Button onClick={() => setRemoveCartBasket('hidden')}><Icon src="/images/icon-close.svg" /></Button>
                </Container>
                  <Rule className="w-full" />
              </Container>
              <Container className="h-full w-full flex flex-col justify-center items-center px-6 gap-7"><Sub className={`${count === 0 ? "block" : "hidden"}`}>Your cart is empty.</Sub>
              {/* De emtpy para verdwijnt wanneer de count verhoogd beven de 0? Dat willen we moeten ervoor zorgen dat de empty para alleen verdwijnt wanneer we een product toevoegen! */}
              {/* refactor the  empty */}
              {/* This is the basket product section */}
              <Container className={`flex gap-4 items-center w-full ${iconCounter >= 1 ? "block" : iconCounter === 0 ? "hidden" : "hidden"}`}> {/* pass aan!!! Wanneer de count op 0 is verwijdered het product niet? 
              zorg er dus voor dat wanneer de count op 0 komt te staan het product verwijderen en de empty para tevoorschijn komt!*/}
                <Thumbnail className="w-16 md:w-12 rounded-md" src="/images/image-product-1-thumbnail.jpg" />
                <Container><Sub className="text-darkGrayish">Fall Limited Edition Sneakers</Sub>
                {price && price.map(item => { {/* This is the cartbasket product details */}
                  return (
                    <Container key={item.id} className="flex gap-1"><BasePrice  className="text-darkGrayish">{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2)}`}</BasePrice>
                    <Counter className="text-darkGrayish">x {count}</Counter>
                    <Amount className="font-bold">{`$${(item.discount ? item.price * item.discount : item.price).toFixed(2) * count}`}</Amount> {/* refactor het optellen van de price naar een state amount */}
                    </Container>
                  )
                })}
                </Container>
                <Container><Icon className="cursor-pointer" onClick={() => props.onDeleteClick()} src="/images/icon-delete.svg" /></Container>
                {/* de delete button moet de product verwijderen zelf als de count hoger is dan 1 
                dus zorg er voor de de gebuiker met een edit button de count can aanpassen*/}
              </Container>
              <Container className={`w-full flex justify-center ${iconCounter >= 1 ? "block" : "hidden"}`}><Button  onClick={() => props.onHandleClick()} className="bg-orange w-full py-4 md:py-3 rounded-lg text-white">Checkout</Button></Container>
              {/* refactor the checkout button */}
              </Container>
        </Container>
    </Container>
  )
}

export default CartBasket