import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
export default function Login() {
    const { loginWithRedirect } = useAuth0();
  return (

    <div>
      <input type="text" placeholder='username' name="" id="" />
      <br />
      <input type="password" placeholder='password' />
      <br />
      <button onClick={() => loginWithRedirect()}>Submit</button>
    </div>
  )
}
