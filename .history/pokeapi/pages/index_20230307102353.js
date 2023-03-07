import React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import Image from 'next/image';

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
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="min-h-screen bg-blue-100 bg-scroll bg-center  flex justify-center items-center" style={{ backgroundImage:"url('pikachu running.gif')" }}>
      <div className="bg-white p-10 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-center items-center mb-10">
          <Image 
            src="/pokeverse.png"
            alt="Pokeball"
            width={450}
            height={120}
          />
        </div>
        <h1 className="text-3xl font-bold text-center">Let's Catch em' all</h1>
        <div className="mt-8">
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-medium mb-2">Please enter your details</h2>
            <div className="mb-2">
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full border border-gray-400 p-2 rounded-lg"
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
              />
            </div>
            <div className="mb-4">
              <label className="block font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-400 p-2 rounded-lg"
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full md:w-auto"
                onClick={login}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-8">
            <h2 className="text-lg font-medium mb-2">User Logged in:</h2>
            <div className="bg-gray-200 p-2 rounded-lg">
              {user?.email}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full md:w-auto"
                onClick={logout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}