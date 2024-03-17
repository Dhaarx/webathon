import React from 'react';
import './store.css';
import cart from '../images/cart.png' ;
import plus from '../images/plus.png' ;

 const Saloon=()=>{
    return(
       
        <div>
            <br/>
            <div className='contain'>
            <div className='text'>Naturals</div>
            <div  className='parent1'>

            <div className='cards '>
            <h3>Haircut and Styling</h3>

            <p>Get a trendy haircut and stylish hairdo.</p>
            <h4>INR 105/-</h4>

                <img src= {require('../Pictures/s1.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
            <h3>Facials and Skincare</h3>

            <p>Revitalize your skin with rejuvenating facials.</p>
            <h4>INR 130/-</h4>

                <img src= {require('../Pictures/s2.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>
            
            <div className='cards '>
            <h3>Manicure-Pedicure</h3>
            <p>Pamper your hands and feet with relaxing treatments.</p>
            <h4>INR 185/-</h4>
                <img src= {require('../Pictures/s3.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            </div>


            <div  className='parent1'>

                <div className='cards'>
                    <h3>Hair Coloring</h3>
                    <p>Add a pop of color to your hair with professional coloring.</p>
                    <h4>INR 270/-</h4>
                    <img src= {require('../Pictures/s4.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                <h3>Spa Treatments</h3>

                <p>Indulge in a calming spa experience to unwind.</p>
                <h4>INR 385/-</h4>
                    <img src= {require('../Pictures/s5.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                <h3>Party Makeup</h3>
                    <p>Enhance your beauty with expert makeup for special occasions.</p>
                    <h4>INR 485/-</h4>
                    <img src= {require('../Pictures/s6.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>
            </div>
        </div>
        </div>
        

       
    )
 }
 export default Saloon;