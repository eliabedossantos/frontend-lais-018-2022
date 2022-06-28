import { useState } from "react";

export function GlobalContext() {
    const [client, setClient] = useStatee();
    const [token, setToken] = useStatee();
    const [isLoggedIn, setIsLoggedIn] = useState();
     fetch('http://localhost:3004', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        setClient(data);
    }
    )
    .catch(error => {
        console.log(error);
    })


  return (
    <GlobalContext.Provider value={{
        client,
        setClient,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn
    }}>
        {props.children}
    </GlobalContext.Provider>
  );
}