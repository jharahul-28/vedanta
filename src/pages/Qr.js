import React from 'react'
import Navbar from '../Components/QR/Navbar'
import About from '../Components/QR/About'
import Documents from '../Components/QR/Documents'
import Details from '../Components/QR/Details/Details'

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
                    ):
                    (
                        <div>
                            <Navbar />
                            <About />
                            <Documents />
                            <Details />
                        </div>
                    )
            }
        </>
    )
}

export default Qr
