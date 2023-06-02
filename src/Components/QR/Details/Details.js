import React, { useState } from 'react'
import './Details.css';
import IndividualDetail from './IndividualDetail';
import NewDetail from './NewDetail';

const Details = () => {

    const dummyDetails = [
        {
            id: '1',
            who: 'Driver',
            ee: 'Entry',
            time: '8:50am',
            gate: 1,
        },
        {
            id: '2',
            who: 'Driver',
            ee: 'Exit',
            time: '5:05pm',
            gate: 1,
        },
        {
            id: '3',
            who: 'Driver',
            ee: 'Entry',
            time: '8:52am',
            gate: 1,
        },
        {
            id: '4',
            who: 'Driver',
            ee: 'Exit',
            time: '5:15pm',
            gate: 4,
        },
        {
            id: '5',
            who: 'Owner',
            ee: 'Entry',
            time: '8:48am',
            gate: 1,
        },
        {
            id: '6',
            who: 'Owner',
            ee: 'Exit',
            time: '5:12pm',
            gate: 1,
        },
    ];

    const [details, setDetails] = useState(dummyDetails);

    const addNewDetail = (enteredDetail) => {
        setDetails((prevDetails) => {
            return [enteredDetail, ...prevDetails]
        })
    }

    return (
        <div className='dEtails'>
            <h3 className='heading'>ENTRY & EXIT DETAILS</h3>
            <table>
                <thead>
                    <tr>
                        <th>Driver/Owner</th>
                        <th>Entry/Exit</th>
                        <th>Time</th>
                        <th>Gate No.</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (details.map((detail) =>
                            <IndividualDetail
                                key={detail.id}
                                who={detail.who}
                                ee={detail.ee}
                                time={detail.time}
                                gate={detail.gate}
                            />
                        ))
                    }
                </tbody>
            </table>
            <NewDetail detailSubmitHandler={addNewDetail} />
        </div>
    )
}

export default Details
