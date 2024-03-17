import React from 'react';
import './store.css';
import cart from '../images/cart.png' ;
import plus from '../images/plus.png' ;



 const Store=()=>{
    return(
        <div>

            <br/>
            <div className='contain'>
            <div className='text'>Stationary Essentials</div>
            <div  className='parent1'>

            <div className='cards '>
                <h3>Note Books</h3>
                <p>Notebooks with various cover designs (plain, patterned, inspirational quotes)</p>
                <h4>INR 25/-</h4>
                <img src= {require('../Pictures/notebook.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Pens</h3>
                <p>Ballpoint pens in assorted colors and styles</p>
                <h4>INR 15/-</h4>               
                
                 <img src= {require('../Pictures/pens.jpg')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>
            
            <div className='cards '>
                <h3>Highlighters</h3>  
                <p>Illuminate important points and passages with our bright and fluorescent highlighters</p>
                <h4>INR 20/-</h4>
                <img src= {require('../Pictures/marker.png')} alt="in"/>
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
                    <h3>Gel Pens</h3>
                    <p>Gel pens with smooth ink flow</p>
                    <h4>INR 10/-</h4>
                    <img src= {require('../Pictures/gelpen.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                    <h3>Scissors</h3>
                    <p>Cut with precision and ease using our sharp and durable scissors</p>
                    <h4>INR 30/-</h4>
                    <img src= {require('../Pictures/scissors.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                    <h3>Sticky Notes</h3>
                    <p>Elevate your note-taking experience with our premium sticky notes</p>
                    <h4>INR 35/-</h4>
                    <img src= {require('../Pictures/sticky.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>
            </div>
        </div>
            
            <div className='contain'>
            <div className='text'>Art Supplies</div>
        <div  className='parent1'>

            <div className='cards'>
                <h3>Sketch Book</h3>
                <p>Capture your imagination on the go</p>
                <h4>INR 50/-</h4>
                <img src= {require('../Pictures/pastels.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards'>

                <h3>Acrylic Paint Sets</h3>
                <p>Unleash your creativity with our vibrant acrylic paint sets</p>
                <h4>INR 60/-</h4>
                <img src= {require('../Pictures/Sketchbook.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards'>
                <h3>Paintbrushes</h3>
                <p>Bring your vision to life with our versatile paintbrushes</p>
                <h4>INR 105/-</h4>
                <img src= {require('../Pictures/oil-paint.png')} alt="in"/>
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
                <h3>Markers</h3>
                <p>Add vibrant hues and fine details to your projects with our high-quality marker sets</p>
                <h4>INR 40/-</h4>
                <img src= {require('../Pictures/markers2.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Oil Paints</h3>
                <p>Achieve rich and luminous effects with our professional-grade oil paint sets</p>
                <h4>INR 55/-</h4>
                <img src= {require('../Pictures/paintbrush.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Pastels</h3>
                <p>Experience the soft, velvety texture and brilliant colors of our premium pastel sets</p>
                <h4>INR 76/-</h4>
                <img src= {require('../Pictures/paint.png')} alt="in"/>
                 <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

        </div>
            </div>

            <div className='contain'>
            <div className='text'>Chocolates And Snacks</div>
            <div  className='parent1'>
            <div className='cards'>
                <h3>Dairy Milk</h3>
                <p>Creamy and smooth milk chocolate.</p>
                <h4>INR 10/-</h4>
                <img src= {require('../Pictures/dairy-milk.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards'>

                <h3>Dark Chocolate</h3>
                <p>Rich and intense dark chocolate.</p>
                <h4>INR 35/-</h4>
                <img src= {require('../Pictures/dark chocolate.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards'>
                <h3>White Chocolate</h3>
                <p>Sweet and buttery white chocolate.</p>
                <h4>INR 40/-</h4>
                <img src= {require('../Pictures/white-chocolate.png')} alt="in"/>
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
            <h3>Hazelnut Chocolate</h3>
            <p>Milk chocolate with crunchy hazelnuts.</p>
            <h4>INR 95/-</h4>
            <img src= {require('../Pictures/silk.png')} alt="in"/>
            <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                
            </div>
            <div className='cards '>
                <h3>Fruit & Nut Chocolate</h3>
                <p>Milk chocolate with dried fruits and nuts.</p>
                <h4>INR 125/-</h4>
                <img src= {require('../Pictures/caramel-choc.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards '>
                <h3>Caramel-Chocolate</h3>
                <p>Milk chocolate with gooey caramel filling.</p>
                <h4>INR 85/-</h4>
                <img src= {require('../Pictures/nut-chocolate.png')} alt="in"/>
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
 export default Store;