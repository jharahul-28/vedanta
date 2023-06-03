import React, { useEffect } from 'react'
import './Landing.css';
import i1 from '../image/Coach-Bus-mockup-04 - Copy.png';
import i2 from '../image/istockphoto-1294611530-170667a-removebg-preview.png';
import i3 from '../image/vehicle-QR-code-stickers.jpg';
import i4 from '../image/png-transparent-driver-s-license-computer-icons-driving-driving-text-rectangle-car-removebg-preview.png'
import i5 from '../image/1ba0d66413b77df2cf0b48a5fa1c7e3d-removebg-preview.png';
import i6 from '../image/Checklist-Logo-Free-PNG.png'
import { Outlet, Link } from "react-router-dom";

const Landing = () => {

    const s1 = {
        color: 'white',
        backgroundColor: '#9b59b6'
    }
    const s2 = {
        color: '#9b59b6'
    }

    useEffect(() => {
        const counts = document.querySelectorAll('.count')
        const speed = 97

        counts.forEach((counter) => {
            function upDate() {
                const target = Number(counter.getAttribute('data-target'))
                const count = Number(counter.innerText)
                const inc = target / speed
                if (count < target) {
                    counter.innerText = Math.floor(inc + count)
                    setTimeout(upDate, 15)
                } else {
                    counter.innerText = target
                }
            }
            upDate()
        })
    }, []);

    return (
        <>
            <header>
                <nav className='NavBar'>
                    <div class="logo">
                        QR
                    </div>
                    <div class="menu">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>Login</li>
                            <li style={s1}>
                                <Link to="/Qr">Scan Qr</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Outlet />

                <div class="opener">
                    <div class="left">
                        <h1>Welcome to QR scanner</h1>
                        <p>Scan the QR for further details</p>
                        <button>Scan QR</button>
                    </div>

                    <div class="right">
                        <img src={i1} />
                        {/* <img src={i2} /> */}
                    </div>
                </div>
            </header>

            <div class="heading">
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, tempora!</p>
            </div>
            <div class="container">
                <div class="about">
                    <div class="about-image">
                        <img src={i3} />
                    </div>
                    <div class="about-content">
                        <h2>Deatils through QR scanning</h2>
                        <p>We have developed a website on the security of the vechiles that enters a company premises. Any truck or crane that is new to the company is first made to login on our webiste and then after verification from the authorities the car is provided with a qr to stick on the car and whenever the car enters the company premises that qr is scanned through a scanner and all the details of the driver including all his licenses is displayed on our website. The checklist of the vechile is also displayed that stores the information about the numbers of visits that a vechile has done in the company.</p>
                        <p class="read-more">Read More</p>
                    </div>
                </div>
            </div>


            <div class="wrapper">
                <h1>Our Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, soluta.</p>
            </div>

            <div class="content-box">
                <div class="card">
                    <img src={i4} />
                    <h2>Document Check</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt molestias accusantium aut perferendis placeat nulla laudantium, iusto nam fugiat!</p>
                </div>

                <div class="card">
                    <img src={i5} />
                    <h2>Driver details</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt molestias accusantium aut perferendis placeat nulla laudantium, iusto nam fugiat!</p>
                </div>

                <div class="card">
                    <img src={i6} />
                    <h2>Vechile Checklist</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nesciunt molestias accusantium aut perferendis placeat nulla laudantium, iusto nam fugiat!</p>
                </div>
            </div>

            <div class="counting-part">

                <div class="counter-wrapper">

                    <div class="counter">
                        <h1 class="count" data-target="12168">0</h1>
                        <p>No of Registered users</p>
                    </div>

                    <div class="counter">
                        <h1 class="count" data-target="1216">0</h1>
                        <p>New CustomerS joining</p>
                    </div>

                    <div class="counter">
                        <h1 class="count" data-target="21729">0</h1>
                        <p>No of checklists</p>
                    </div>

                    <div class="counter">
                        <h1 class="count" data-target="15467">0</h1>
                        <p>No of documents</p>
                    </div>
                </div>
            </div>


            <div class="headings">
                <h1>Connect with us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, quidem.</p>
            </div>

            <div class="container">


                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                            <i class="fas fa-map-marker-alt" style={s2}></i>
                            <div class="topic">Address</div>
                            <div class="text-one">BIT SINDRI</div>
                            <div class="text-two">SINDRI, SHEHARPURA</div>
                        </div>
                        <div class="phone details">
                            <i class="fas fa-phone-alt" style={{ color: '#9b59b6' }}></i>
                            <div class="topic">Phone</div>
                            <div class="text-one">+0098 9893 5647</div>
                            <div class="text-two">+0096 3434 5678</div>
                        </div>
                        <div class="email details">
                            <i class="fas fa-envelope" style={{ color: '#9b59b6' }}></i>
                            <div class="topic">Email</div>
                            <div class="text-one">adarshs738@gmail.com</div>
                            <div class="text-two">adarshs738@gmail.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Send us a message</div>
                        <p>If you have any query you can message here</p>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-box message-box">
                                <input type="text-area" placeholder="Enter your message" />

                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            .

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
        </>
    )
}

export default Landing;