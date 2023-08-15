import React from "react";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";

const Transaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  const textHandler = (e) => {
    setText(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={textHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={amountHandler}
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default Transaction;
