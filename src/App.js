import React from 'react';
import './App.css';
import PiggyBank from "./PiggyBank";
import AccountDetails from './AccountDetails';

function App() {
  return (
    <>
    <PiggyBank 
      title="Savings Pig" 
      depositAmount={10}
      interest={5}
    />
    <AccountDetails user={
      {
        name: 'John Smith', 
        age: 32, 
        account_type:'Business'}
      } />
    </>
  );
}

export default App;
