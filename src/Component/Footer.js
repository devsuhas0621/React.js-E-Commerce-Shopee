import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <footer>
                <div className="foot-top">
                    <div className="foot-left">
                    <div className="about foot-box">
                        <p className="about-title">ABOUT</p>
                        <ul>
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Shopee stories</a></li>
                            <li><a href="">press</a></li>
                        </ul>
                    </div>
                    <div className="help foot-box">
                        <p className="about-title">HELP</p>
                        <ul>
                            <li><a href="">Payment</a></li>
                            <li><a href="">Shipping</a></li>
                            <li><a href="">cancellation & return</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="policy foot-box">
                        <p className="about-title">POLICY</p>
                        <ul>
                            <li><a href="">cancellation & return</a></li>
                            <li><a href="">TERM OF USE</a></li>
                            <li><a href="">SECURITY</a></li>
                            <li><a href="">PRIVCY</a></li>
                        </ul>
                    </div>
                    <div className="social foot-box">
                        <p className="about-title">SOCIAL</p>
                        <ul>
                            <li><a href="">FACEBOOK</a></li>
                            <li><a href="">TWITTER</a></li>
                            <li><a href="">INSTAGRAM</a></li>
                            <li><a href="">YOUTUBE</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="foot-right">
                        <h2>NOTE -</h2>
                        <p>"🚧 This project is a beginner-friendly work-in-progress! Some features might not be fully functional yet. Please explore with care and expect updates as we continue to enhance your shopping experience. Thank you for your understanding! 🌟"
                        </p>
                    </div>
                </div>
                <div className="foot-bottom">
                    <h3>&copy;SHOPEE</h3>
                    <h3>www.shopee.com</h3>
                    <div className="payment">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="" />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
