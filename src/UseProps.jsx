import React from 'react';


function Computer(props) {
  return (
    <div className="laptop">
      <h2>{props.name}</h2>
      <ul>
        <li><strong>Category :</strong> {props.category}</li>
        <li><strong>Type :</strong> {props.description}</li>
        <li><strong>Stock :</strong> {props.quantity}</li>
        <li><strong>Price :</strong> ${props.price.toFixed(2)}</li>
        <li style={{ color: props.isDeliver ? "green" : "red" }}>
            <strong>Delivering :</strong> {props.isDeliver ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}

export default Computer;