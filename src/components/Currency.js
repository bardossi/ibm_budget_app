import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setCurrency] = useState('£');
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
        console.log(event.target.value)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }

    return (
        <div className='alert alert-success'>
            <span>Currency: </span>
            <select value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
