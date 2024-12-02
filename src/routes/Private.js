import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom'

import { auth } from '../firebase/firebaseConn'
import { onAuthStateChanged } from 'firebase/auth'

export default function Private({ children }) {
    const [loading, setLoading] = useState(true);
    const [singned, setSingned] = useState(false);

    useEffect(() => {
        async function checkLogin() {
            const unsub = onAuthStateChanged(auth, (user) => {
                //se tem user logado
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email
                    }

                    localStorage.setItem("@detailUser", JSON.stringify(userData))

                    setLoading(false);
                    setSingned(true);
                } else{
                    setLoading(false);
                    setSingned(false);
                }
            })
        }

        checkLogin();
    }, [])

    if(loading){
        return(
            <div></div>
        )
    }

    if(!singned){
        return <Navigate to="/" />
    }

    return children;
}