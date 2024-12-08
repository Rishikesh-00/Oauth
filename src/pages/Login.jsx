import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div>
      <input type="text" placeholder="username" />
      <br />
      <input type="password" placeholder="password" />
      <br />
      <button onClick={() => navigate('/dashboard')}>Dashboard</button> {/* Fixed navigate */}
      <button onClick={() => loginWithRedirect()}>Submit</button>
    </div>
  );
}
