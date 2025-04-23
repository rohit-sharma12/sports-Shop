import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src="/src/assets/logo.png" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ullam perferendis laborum quis, temporibus aut ut tempora quisquam provident adipisci sapiente a voluptates porro qui iusto voluptatem accusamus at quidem.</p>
                    <div className='social-media-icons'>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
               
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91 817-818-8924</li>
                        <li>rs0043071@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p>Copyright@2025 - ALL Right Reserved</p>
        </div>
    )
}

export default Footer
