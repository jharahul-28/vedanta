import React from 'react'
import Navbar from '../Components/QR/Navbar'
import About from '../Components/QR/About'
import Documents from '../Components/QR/Documents'
import Details from '../Components/QR/Details/Details'
import './Qr.css';

const Qr = () => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => setLoading(true), 4000)
    })
    return (
        <>
            {
                !loading ?
                    (
                        <div>
                            <div className="loading">
                                <img src="/qr.gif" alt="" />
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            <Navbar />
                            <About />
                            <Documents />
                            <Details />
                            <footer>
                                <div class="content">
                                    <div class="top">
                                        <div class="logo-details">
                                            <i class="fab fa-slack"></i>
                                            <span class="logo_name">QR Scanner</span>
                                        </div>
                                        <div class="media-icons">
                                            <p><i class="fab fa-facebook-f"></i></p>
                                            <p><i class="fab fa-twitter"></i></p>
                                            <p><i class="fab fa-instagram"></i></p>
                                            <p><i class="fab fa-linkedin-in"></i></p>
                                            <p><i class="fab fa-youtube"></i></p>
                                        </div>
                                    </div>
                                    <div class="link-boxes">
                                        <ul class="box">
                                            <li class="link_name">Company</li>
                                            <li><p>Home</p></li>
                                            <li><p>Contact us</p></li>
                                            <li><p>About us</p></li>
                                            <li><p>Get started</p></li>
                                        </ul>
                                        <ul class="box">
                                            <li class="link_name">Services</li>
                                            <li><p>Document check</p></li>
                                            <li><p>Daily Checklists</p></li>
                                            <li><p>Driver details </p></li>
                                            <li><p></p></li>
                                        </ul>
                                        <ul class="box">
                                            <li class="link_name">Account</li>
                                            <li><p>Profile</p></li>
                                            <li><p>My account</p></li>
                                            <li><p>Prefrences</p></li>
                                            <li><p>Purchase</p></li>
                                        </ul>
                                        <ul class="box">
                                            <li class="link_name">Benefits</li>
                                            <li><p>Instant qr</p></li>
                                            <li><p>Smart verification</p></li>
                                            <li><p>Qr code</p></li>
                                            <li><p>Driver details</p></li>
                                        </ul>
                                        <ul class="box input-box">
                                            <li class="link_name">Subscribe</li>
                                            <li><input type="text" placeholder="Enter your email" /></li>
                                            <li><input type="button" value="Subscribe" /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-details">
                                    <div class="bottom_text">
                                        <span class="copyright_text">Copyright © 2021 <p>IETE.</p>All rights reserved</span>
                                        <span class="policy_terms">
                                            <p>Privacy policy</p>
                                            <p>Terms & condition</p>
                                        </span>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    )
            }
        </>
    )
}

export default Qr
