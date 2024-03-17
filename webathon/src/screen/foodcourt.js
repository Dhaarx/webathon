import React from 'react';
import './store.css';
import cart from '../images/cart.png' ;
import plus from '../images/plus.png' ;



 const Foodcourt=()=>{
    return(
        <div>

            <br/>
            <div className='contain'>
            <div className='text'>Tiffin Items</div>
            <div  className='parent1'>

            <div className='cards '>
                <h3>Masala Dosa</h3>
                <p>A crispy South Indian crepe filled with spiced potato filling.</p>
                <h4>INR 85/-</h4>
                <img src= {require('../Pictures/f1.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Puri Bhaji</h3>
                <p>Deep-fried puffed bread served with spiced potato curry.</p>
                <h4>INR 45/-</h4>
                <img src= {require('../Pictures/f2.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>
            
            <div className='cards '>
                <h3>Paneer Paratha</h3>  
                <p>Whole wheat bread stuffed with spiced paneer (Indian cottage cheese).</p>
                <h4>INR 100/-</h4>
                <img src= {require('../Pictures/f3.png')} alt="in"/>
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
                    <h3>Aloo Poha</h3>
                    <p>Flattened rice cooked with potatoes, peanuts, and spices.</p>
                    <h4>INR 85/-</h4>
                    <img src= {require('../Pictures/f4.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                    <h3>Chole Bhature</h3>
                    <p>Spicy chickpea curry served with fried bread.</p>
                    <h4>INR 65/-</h4>
                    <img src= {require('../Pictures/f5.png')} alt="in"/>
                    <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                </div>

                <div className='cards'>
                    <h3>Idli Sambar</h3>
                    <p>Steamed rice cakes served with lentil-based vegetable stew.</p>
                    <h4>INR 15/-</h4>
                    <img src= {require('../Pictures/f6.png')} alt="in"/>
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
            <div className='text'>Fast Foods</div>
        <div  className='parent1'>

            <div className='cards'>
                <h3>Veg Hakka Noodles</h3>
                <p>Stir-fried noodles with mixed vegetables, seasoned with Hakka spices.</p>
                <h4>INR 80/-</h4>
                <img src= {require('../Pictures/f7.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards'>

                <h3>Paneer Fried Rice</h3>
                <p>Rice stir-fried with paneer (Indian cottage cheese) and vegetables.</p>
                <h4>INR 75/-</h4>
                <img src= {require('../Pictures/f8.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards'>
                <h3>Pav Bhaji</h3>
                <p>Spiced vegetable mash served with buttered bread rolls.</p>
                <h4>INR 45/-</h4>
                <img src= {require('../Pictures/f9.png')} alt="in"/>
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
                <h3>Samosa</h3>
                <p>Deep-fried pastry filled with spiced potatoes and peas.</p>
                <h4>INR 15/-</h4>
                <img src= {require('../Pictures/f10.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Vada Pav</h3>
                <p>Spicy potato patty served in a bun with chutneys.</p>
                <h4>INR 65/-</h4>
                <img src= {require('../Pictures/f11.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>

            <div className='cards '>
                <h3>Chowmein</h3>
                <p>Stir-fried noodles with vegetables or chicken, seasoned with soy sauce.</p>
                <h4>INR 85/-</h4>
                <img src= {require('../Pictures/f12.png')} alt="in"/>
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
            <div className='text'>Bakery Items</div>
            <div  className='parent1'>
            <div className='cards'>
                <h3>Chocolate Cookies</h3>
                <p>Classic cookies with rich chocolate chips.</p>
                <h4>INR 45/-</h4>
                <img src= {require('../Pictures/f13.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards'>

                <h3>Vegetable Puff</h3>
                <p>Flaky pastry filled with spiced vegetable filling.</p>
                <h4>INR 15/-</h4>
                <img src= {require('../Pictures/f14.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards'>
                <h3>Plain Croissant</h3>
                <p>Buttery and flaky pastry.</p>
                <h4>INR 35/-</h4>
                <img src= {require('../Pictures/f15.png')} alt="in"/>
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
            <h3>Blueberry Muffin</h3>
            <p>Soft and moist muffin with blueberries.</p>
            <h4>INR 40/-</h4>
            <img src= {require('../Pictures/f16.png')} alt="in"/>
            <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
                
            </div>
            <div className='cards '>
                <h3>Banana Bread</h3>
                <p>Moist bread with a hint of banana flavor.</p>
                <h4>INR 20/-</h4>
                <img src= {require('../Pictures/f17.png')} alt="in"/>
                <div className='but'>
                 <img src={cart} alt="cart"/>
                </div>
                <div className='but1'>
                 <img src={plus} alt="cart"/>
                </div>
            </div>
            <div className='cards '>
                <h3>Black Forest Cake</h3>
                <p>Layers of chocolate sponge cake with cherries and whipped cream.</p>
                <h4>INR 150/-</h4>
                <img src= {require('../Pictures/f18.png')} alt="in"/>
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
 export default Foodcourt;