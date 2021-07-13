import React, {useState, Fragment} from "react";

const PiggyBank = ({title, depositAmount, interest}) => {

  const [total, setTotal] = useState(0);

  const deposit = () => {
    setTotal(total + depositAmount);
  }

  const withdraw = () => {
    let newAmount = total - depositAmount;

    if(newAmount < 0){
      newAmount = 0;
    }

    setTotal(newAmount);
  }

  const applyInterst = () => {
    let appliedInterest = (total * interest) / 100
    setTotal(Math.round(total + appliedInterest))
  }

  return(
    <>
      <h1>{title}</h1>
      <p>Total: £{total}</p>
      <button onClick={() => deposit()}>Deposit</button>
      <button onClick={() => withdraw()}>Withdraw</button>
      <button onClick={() => applyInterst()}>Apply Inter</button>
    </>
  )
}

export default PiggyBank;