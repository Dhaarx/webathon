import React from 'react';
import './cart.css'
 const Cart=()=>{
    return(
        <div>
            <br/>
            <h2>Continue Shopping</h2>

            <div className='payment-container'>
                <h3>Payment</h3>
                <p>User</p>
                <div className='user-info'>
                <img src= {require('../Pictures/s2.png')} alt="in"/>
                </div>
                Payment Method
                <div className='methods'>
                   
                    <img src= {require('../Pictures/atm.jpg')} alt="in"/>
                    <img src= {require('../Pictures/mastercard.jpg')} alt="in"/>
                    <img src= {require('../Pictures/Gpay.jpg')} alt="in"/>

                </div>

                <div className='details'>
                <p>Name on Card: <input type='text' placeholder='Enter Your Name'/> </p>
                <br/>
                <p>Card Number:<input type='number' placeholder='Enter Your Card Number'/> </p> 
                
                <br/>
                <div className='details2'>
               <p> Expiry Date:<input type='month' placeholder='MM / YY'/> </p> 
               </div> 
               <div className='details3'>
                <div className='cvv'>Cvv:<input type='number' placeholder='Enter CVV' /> </div>
                </div>
                </div>

                <div className='bill-amount'>
                    <p>Sub total</p> 
                    <br/>
                    </div>
                    <div className='bill-amount1'>
                    <p>Total Amount(Tax incl.)</p> 
                </div>
                <div className='bill'>
                    <p>INR 65/-</p> 
                </div>
                <div className='bill1'>
                    <p>INR 75/-</p> 
                </div>

                <div className='pay'>
                    <div>
                    <p>INR 75/-</p>
                    </div >
                    <div className='inner-pay'>
                    <p>Print Bill </p>
                    </div>

                </div>
            </div>
        </div>
    )
 }
 export default Cart;
