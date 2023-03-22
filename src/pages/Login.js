import React, { useState } from 'react';
import { useFirebaseApp, useUser } from 'reactfire';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


const firebase = useFirebaseApp()
const user = useUser()

const handleLogin = async (e) => {
    e.preventDefault()
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.log(error)
    }
}

if (user) {
    return <div> You are already logged in! Up your coding game and purchase some products!</div>
}

return (
    <form onSubmit={handleLogin}>
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />


    </form>
)}

export default Login