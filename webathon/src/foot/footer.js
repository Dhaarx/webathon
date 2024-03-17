import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";

import "./footer.css";

const Footer=()=>{
    return(
            <div className='footer'>
                <div className="social-links">
                    <a href="https://www.instagram.com"><i className="social"><FaInstagram /></i></a>
                    <a href="https://www.linkedin.com"><i className="social"><FaSquareXTwitter /></i></a>
                </div>
                <div className='social-linkss'>
                    <a href="https://www.facebook.com"><i className="social"><FaFacebookSquare /></i></a>
                    <a href='https://www.snapchat.com'><i className='social'><FaSnapchat /></i></a>
                </div>
                
                <div className='ss'>
                    <p>Get Exclusive Deals in your Inbox</p>
                    <button>youremail@gmail.com</button>
                </div>
                <div className='aa'>
                    <button>Subscribe</button>
                </div>
                <div className='cc'>
                    <p>Legal Pages</p>
                </div>
                <div className='bb'>
                    <p>Terms and conditions<br/>
                    Privacy<br/>
                    Cookies<br/>
                    Modern Slavery Statement</p>
                </div>
                <div className='last'>
                    <div className='p11'>
                        <p>Copyright 2024, All Rights Reserved.</p>
                    </div>
                    <div className='p12'>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='p13'>
                        <p>Terms</p>
                    </div>
                    <div className='p14'>
                        <p>Pricing</p>
                    </div>
                    <div className='p15'>
                        <p>Do not sell or share my personal information</p>
                    </div>

                </div>
              
               

                
            </div>
    )
}
export default Footer;