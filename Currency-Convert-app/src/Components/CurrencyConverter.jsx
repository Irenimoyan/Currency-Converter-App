import { useState } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [result, setResult] = useState(null);

    return (
        <div>
            <h1>Currency Converter</h1>
            {/* Input to enter the amount to convert */}
            <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter amount'
                className='border p-2 w-full'
            />
            {/* Select the currency to convert from */}
            <select value={fromCurrency} onChange={(e=> setFromCurrency(e.target.value))}>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="NGN">NGN</option>
                <option value="EUR">EUR</option>
            </select>

            {/* Select the currency to convert into */}
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                <option value="EUR">EURO</option>
                <option value="USD">USD</option>
                <option value="NGN">NGN</option>
                <option value="GBP">GBP</option>
            </select>

            <button type="submit">Convert</button>

            {result &&<p className='text-lg font semi-bold'>Result:{result}</p>}

        </div>
    )
}