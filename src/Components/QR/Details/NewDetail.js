import React, { useState } from 'react';
import './NewDetail.css';

const NewDetail = (props) => {
    const [DO, setDO] = useState('');
    const [ee, setEE] = useState('');
    const [gate, setGate] = useState('');
    const [time, setTime] = useState('');

    const DOChangeChandler = (event) => {
        setDO(event.target.value);
    }
    const eeChangeChandler = (event) => {
        setEE(event.target.value);
    }
    const gateChangeChandler = (event) => {
        setGate(event.target.value);
    }
    const timeChangeChandler = (event) => {
        setTime(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const entryDetail = {
            id: Math.random().toString(),
            who: DO,
            ee: ee,
            time: time,
            gate: +gate,
        };
        props.detailSubmitHandler(entryDetail);
        setEE('');
        setGate('');
        setTime('');
        setDO('');
    }

    const cancelHandler= () => {
        setEE('');
        setGate('');
        setTime('');
        setDO('');
    }

    return (
        <div className='newDetail'>
            <h3 className='heading'>
                ADD NEW DETAILS HERE
            </h3>
            <form className='inputForm' onSubmit={submitHandler}>
                <div className="input">
                    <label htmlFor="">Driver/Owner</label>
                    <input type="text" value={DO} onChange={DOChangeChandler} />
                </div>
                <div className="input">
                    <label htmlFor="">Entry/Exit</label>
                    <input type="text" value={ee} onChange={eeChangeChandler} />
                </div>
                <div className="input">
                    <label htmlFor="">Gate Number</label>
                    <input type="number" step={1} max={5} min={1} value={gate} onChange={gateChangeChandler} />
                </div>
                <div className="input">
                    <label htmlFor="">Time</label>
                    <input type="text" value={time} onChange={timeChangeChandler} />
                </div>
                <button type='submit'>Add Detail</button>
                <button onClick={cancelHandler}>Cancel</button>
            </form>
        </div>
    )
}

export default NewDetail
