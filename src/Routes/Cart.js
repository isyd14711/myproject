import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import { useSelector } from 'react-redux';
const Cart = () => {
  const { cart } = useSelector((x) => x);
  return (
    <>
      <Navbar/>
      <section>
        {
          cart.map((el) =>(
            <div key={el.id}>
              <h1>{el.title}</h1>
              <img src={el.thumbnail} alt=""/>
            </div>
          ))
        }
      </section>
    </>
  )
}

export default Cart;