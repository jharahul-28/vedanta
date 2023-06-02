import React from 'react'
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs'
import './Documents.css';

const Documents = () => {
    return (
        <div className='documents'>
            <h3>DOCUMENTS</h3>
            <div className="documentsDetails">
                <div className="rowDocument" id='rd1'>
                    <div className='document' id='dd1'>
                        <p>DRIVING LICENSE:</p>
                        <p><BsFillFileEarmarkCheckFill size={22} /></p>
                        <p><button>View</button></p>
                    </div>

                    <div className='document' id='dd2'>
                        <p>POLLUTION CERTIFICATE:</p>
                        <p><BsFillFileEarmarkCheckFill size={22} /></p>
                        <p><button>View</button></p>
                    </div>
                </div>
                <div className='rowDocument' id='rD2'>
                    <div className='document' id='dd3'>
                        <p>VEHICLE PAPERS:</p>
                        <p><BsFillFileEarmarkCheckFill size={22} /></p>
                        <p><button>View</button></p>
                    </div>

                    <div className='document' id='dd4'>
                        <p>INSURANCE:</p>
                        <p><BsFillFileEarmarkCheckFill size={22} /></p>
                        <p><button>View</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents
