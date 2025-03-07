import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const processPayment = async (paymentData) => {
  console.log('Processing Payment:', paymentData);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true, message: 'Payment Successful' }), 2000));
};

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [amount, setAmount] = useState(500);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();
    setError('');
    setPaymentStatus('Processing...');

    if (!recipientName || !recipientEmail) {
      setError('Please enter recipient details.');
      setPaymentStatus(null);
      return;
    }

    if (paymentMethod === 'creditCard' && (!cardNumber || !expiryDate || !cvc)) {
      setError('Please fill out all payment fields.');
      setPaymentStatus(null);
      return;
    }

    if (paymentMethod === 'mobile' && !mobileNumber) {
      setError('Please enter your mobile number for payment.');
      setPaymentStatus(null);
      return;
    }

    if (paymentMethod === 'cash' && !cashAmount) {
      setError('Please enter the cash amount.');
      setPaymentStatus(null);
      return;
    }

    const paymentData = {
      paymentMethod,
      amount,
      cardNumber,
      expiryDate,
      cvc,
      mobileNumber,
      cashAmount,
      recipientName,
      recipientEmail,
    };

    try {
      const response = await processPayment(paymentData);
      if (response.success) {
        setPaymentStatus('Payment Successful! You will receive a receipt via mail.');
        setTimeout(() => navigate('/home'), 3000);
      } else {
        setPaymentStatus('Payment Failed');
      }
    } catch (error) {
      setError('Something went wrong, please try again.');
      setPaymentStatus(null);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">Pay for Morgue Services</h2>

      {paymentStatus && <div className="mb-4 p-2 text-center text-white bg-green-500 rounded">{paymentStatus}</div>}
      {error && <div className="mb-4 p-2 text-center text-white bg-red-500 rounded">{error}</div>}

      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Recipient Name</label>
          <input className="w-full p-2 border rounded" type="text" placeholder="Full Name" value={recipientName} onChange={(e) => setRecipientName(e.target.value)} />
        </div>

        <div>
          <label className="block font-medium mb-1">Recipient Email</label>
          <input className="w-full p-2 border rounded" type="email" placeholder="Email Address" value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} />
        </div>

        <div>
          <label className="block font-medium mb-1">Payment Method</label>
          <select
            className="w-full p-2 border rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="creditCard">Credit/Debit Card</option>
            <option value="mobile">Mobile Payment</option>
            <option value="cash">Cash</option>
          </select>
        </div>

        {paymentMethod === 'creditCard' && (
          <>
            <input className="w-full p-2 border rounded" type="text" placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            <input className="w-full p-2 border rounded" type="text" placeholder="Expiry Date (MM/YY)" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
            <input className="w-full p-2 border rounded" type="text" placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} />
          </>
        )}

        {paymentMethod === 'mobile' && (
          <>
            <input className="w-full p-2 border rounded" type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            <select className="w-full p-2 border rounded">
              <option value="mpesa">MTN</option>
              <option value="venmo">Voda Cash</option>
              <option value="paypal">AirtelTigo</option>
            </select>
          </>
        )}

        {paymentMethod === 'cash' && (
          <input className="w-full p-2 border rounded" type="text" placeholder="Cash Amount" value={cashAmount} onChange={(e) => setCashAmount(e.target.value)} />
        )}

        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition" type="submit">
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default Payment;

