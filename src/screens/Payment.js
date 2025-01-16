import React, { useState } from 'react';

// A mock service for payment processing (You would integrate with a real payment API in a real-world application)
const processPayment = async (paymentData) => {
  // Simulate API request
  console.log('Processing Payment:', paymentData);
  return new Promise((resolve) => setTimeout(() => resolve({ success: true, message: 'Payment Successful' }), 2000));
};

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [amount, setAmount] = useState(500); // Example amount
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [cashAmount, setCashAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [error, setError] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();
    setError('');
    setPaymentStatus('Processing...');
    
    // Basic form validation
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
      cashAmount
    };

    try {
      const response = await processPayment(paymentData);
      if (response.success) {
        setPaymentStatus('Payment Successful');
      } else {
        setPaymentStatus('Payment Failed');
      }
    } catch (error) {
      setError('Something went wrong, please try again.');
      setPaymentStatus(null);
    }
  };

  return (
    <div className="payment-container">
      <h2>Pay for Morgue Services</h2>

      {paymentStatus && <div className="payment-status">{paymentStatus}</div>}
      {error && <div className="error">{error}</div>}

      <form onSubmit={handlePayment} className="payment-form">
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select 
            id="paymentMethod" 
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
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input 
                type="text" 
                id="cardNumber" 
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)} 
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input 
                type="text" 
                id="expiryDate" 
                value={expiryDate} 
                onChange={(e) => setExpiryDate(e.target.value)} 
                placeholder="MM/YY"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cvc">CVC</label>
              <input 
                type="text" 
                id="cvc" 
                value={cvc} 
                onChange={(e) => setCvc(e.target.value)} 
                placeholder="CVC"
              />
            </div>
          </>
        )}

        {paymentMethod === 'mobile' && (
          <>
            <div className="form-group">
              <label htmlFor="mobileNumber">Mobile Number</label>
              <input 
                type="text" 
                id="mobileNumber" 
                value={mobileNumber} 
                onChange={(e) => setMobileNumber(e.target.value)} 
                placeholder="Your mobile number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobilePaymentService">Payment Service</label>
              <select 
                id="mobilePaymentService"
                onChange={(e) => setMobileNumber(e.target.value)}
              >
                <option value="mpesa">M-Pesa</option>
                <option value="venmo">Venmo</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </>
        )}

        {paymentMethod === 'cash' && (
          <>
            <div className="form-group">
              <label htmlFor="cashAmount">Cash Amount</label>
              <input 
                type="text" 
                id="cashAmount" 
                value={cashAmount} 
                onChange={(e) => setCashAmount(e.target.value)} 
                placeholder="Enter cash amount"
              />
            </div>
          </>
        )}

        <button type="submit">Pay ${amount}</button>
      </form>
    </div>
  );
};

export default Payment;
