import React from 'react';
// import './PageNotFound.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const PaymentSuccessful = () => {
    return (
        <div className="PageNotFound">
            <h1>Payment Success</h1>

            <Link to='/' >
                <Button variant="contained" className="PageNotFound__empty-button">Continue Shopping</Button>
            </Link>
        </div>
    );
}

export default PaymentSuccessful;
