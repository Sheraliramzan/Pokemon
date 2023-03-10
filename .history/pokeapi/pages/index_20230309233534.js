import React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import Image from 'next/image';


export default function Login() {

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
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-600 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center items-center mb-6">
          <Image 
            src="/pokeverse.png"
            alt="Pokeball"
            width={450}
            height={120}
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">Welcome to Pokeverse</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value)
              }}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value)
              }}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full mb-4"
            onClick={login}
          >
            Sign In
          </button>
        </form>
        {user?.email && (
          <div className="mt-4">
            <h2 className="text-lg font-medium mb-2">Logged in as:</h2>
            <div className="bg-gray-200 p-2 rounded-lg">
              {user.email}
            </div>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full mt-4"
              onClick={logout}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  )
}