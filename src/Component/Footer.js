import React from 'react'

function Footer(){
    return(
        <footer id="footer" className="section-p1">
        <div className="footer-info">
            <img src="img/logo.png" alt=""/>
            <h4>Contact</h4>
            <h6>Address:<span>502 Wellington Road,Street 32.San Francisco</span></h6>
            <h6>Phone:<span>+01 2222 365/(+91)01 2345 6789</span></h6>
            <h6>Hours:<span>10:00-18:00,Mon-Sat</span></h6>
            <h4>Follow Us</h4>
            <div className="social-logo">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="footer-info">
            <h4>About</h4>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Term and Conditions</p>
            <p>Contact Us</p>
        </div>
        <div className="footer-info">
            <h4>My Account</h4>
            <p>Sign In</p>
            <p>View Cart</p>
            <p>My Wishlist</p>
            <p>Track My Order</p>
            <p>Help</p>
        </div>
        <div className="footer-info">
            <h4>Install App </h4>
            <p>From App Store Or Google Play</p>
            <img src="img/pay/app.jpg" alt=""/>
            <img src="img/pay/play.jpg" alt=""/>
            <p>Secured Payment Gateways</p>
            <img id="pay" src="img/pay/pay.png" alt=""/>
        </div>
    </footer>
    )
}

export default Footer