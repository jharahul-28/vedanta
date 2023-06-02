import React from 'react'
import './IndividualDetail.css';

const IndividualDetail = (props) => {
  return (
    <tr>
      <td>{props.who}</td>
      <td>{props.ee}</td>
      <td>{props.time}</td>
      <td>{props.gate}</td>
    </tr>
  )
}

export default IndividualDetail;