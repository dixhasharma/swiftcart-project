import React from 'react'
import {BsCart3} from 'react-icons/Bs'
import { useState, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartContext } from '../context/addtocart/context';   //likhna baki
import CartItem from './CartItem';

export default function Cartlogooffcanvas() {

  const {state,dispatch}=useContext(CartContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
  return (
    <>
    <button className='btn position-relative btn-dark mx-2' onClick={handleShow}><BsCart3/>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{state.cart.length}</span>
    </button>


    {/* offcanvas */}
    <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
          <button className='btn btn-outline-dark mx-3' onClick={()=>{dispatch({type:'CLEAR_CART'})}}>CLEAR CART</button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            state.cart.map((val,index)=>
            <CartItem key={index} data={val}/>

            )
          }
        </Offcanvas.Body>
      </Offcanvas>

    
    
    </>
  )
}
