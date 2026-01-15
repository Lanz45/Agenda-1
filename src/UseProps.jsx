import React from 'react';

function Computer(props) {
  const statusColor = props.isDeliver ? "text-green-600" : "text-red-500";

  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100">
      
      <h2 className="text-2xl font-bold text-blue-900 mb-4">{props.name}</h2>
      
      <ul className="space-y-3 text-blue-800">
        <li className="flex justify-between border-b border-blue-200 pb-2">
          <span className="font-semibold text-blue-900">Category:</span> 
          <span>{props.category}</span>
        </li>
        <li className="flex justify-between border-b border-blue-200 pb-2">
          <span className="font-semibold text-blue-900">Type:</span> 
          <span>{props.description}</span>
        </li>
        <li className="flex justify-between border-b border-blue-200 pb-2">
          <span className="font-semibold text-blue-900">Stock:</span> 
          <span>{props.quantity}</span>
        </li>
        <li className="flex justify-between border-b border-blue-200 pb-2">
          <span className="font-semibold text-blue-900">Price:</span> 
          <span className="font-bold text-lg">${props.price.toFixed(2)}</span>
        </li>
        <li className="flex justify-between pt-2 items-center">
          <span className="font-semibold text-blue-900">Status:</span>
          <span className={`font-bold uppercase tracking-wider text-sm ${statusColor}`}>
             {props.isDeliver ? "Delivered" : "Not Delivered"}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Computer;