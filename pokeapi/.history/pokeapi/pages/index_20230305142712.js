import React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';

export default function Home() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])


  const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8">Let's Catch em' all</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-400 rounded"
              type="email"
              id="email"
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value)
              }}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">Password</label>
            <input
              className="w-full p-2 border border-gray-400 rounded"
              type="password"
              id="password"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value)
              }}
            />
          </div>
          <button
            onClick={login}
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        <div className="relative mt-4">
          <h2 className="text-lg font-bold mb-2">User Logged in:</h2>
          <div className="flow-root m-2 p-2">
            {user?.email}
          </div>
          <button
            onClick={logout}
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}