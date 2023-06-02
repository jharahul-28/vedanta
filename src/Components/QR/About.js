import React from 'react'
import driverImage from '../../image/ownerImage.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <div className="image">
                <img src={driverImage} alt="" />
            </div>
            <div className='driverDesc'>
                <div className="individualDesc">
                    <p>Name:</p>
                    <p>Ramandeep Singh</p>
                </div>
                <div className="individualDesc" id='iDesc2'>
                    <div>
                        <p>Post:</p>
                        <p>Employee</p></div>
                    <div>
                        <p>Age:</p>
                        <p>43</p>
                    </div>
                </div>
                <div className="individualDesc">
                    <p>Card No.:</p>
                    <p>JSRCRM23834783</p>
                </div>
                <div className="individualDesc">
                    <p>Plant:</p>
                    <p>CRM Plant</p>
                </div>
            </div>
        </div>
    )
}

export default About