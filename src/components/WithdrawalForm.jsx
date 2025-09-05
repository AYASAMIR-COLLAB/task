import React from 'react';
import AmountInput from './AmountInput';

const WithdrawalForm = ({ onSubmit, amount, onAmountChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <AmountInput value={amount} onChange={onAmountChange} />
      <button type="submit">Withdraw</button>
    </form>
  );
};

export default WithdrawalForm;