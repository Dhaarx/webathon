import React from 'react';
import "./home.css";
import ima from '../images/stall.jpg' ;


const Home=()=>{
    return(
        <div className="back" >
           
            
                <div className="firstline">
                  <p >Are you in NEED?</p>
                </div>
                <br/>
                  <br/>
                <div className="p1">
                    <p >Don’t Wait!</p>
                </div>
                <br/>
                <br/>
                <br/>
                  <br/>
                <div className="p2">
                    <p >Revamp. Restock. Recharge.</p>
                </div>
                <div>
                    <button className='btn1'>Check Here!</button>
                </div>
               <div className='ima'>
                <img src={ima} alt='imag'></img>
               </div>
               <br/>
                <br/>
                <br/>
                <br/>               
        </div>
    )
 }
 export default Home;