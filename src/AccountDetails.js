import React from "react";

const AccountDetails = ({user}) => {

  return(
    <>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
      <p>Account Type: {user.account_type}</p>
    </>
  )
}

export default AccountDetails;