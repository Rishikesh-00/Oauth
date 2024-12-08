import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
export default function Dashboard() {
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
      }
  return (
    <div>
      { isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )}
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    </div>
  )
}
