import React from 'react';
import './OrderConfirmation.scss';
import { useParams } from 'react-router-dom';

const OrderConfirmation = () => {
    const { orderId } = useParams()

    return (
        <div className="OrderConfirmation">
            <h1 className="OrderConfirmation__title">Order Sent</h1>
            <p>Your order code is: <span>{orderId}</span></p>
        </div>
    );
}

export default OrderConfirmation;
