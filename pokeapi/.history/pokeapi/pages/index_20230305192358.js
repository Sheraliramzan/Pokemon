//ash's email is ashketchum@pokemon.com and his password is pikachu
import React from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import styles from '../styles/Home.module.css';




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
    <div className={styles.loginbg}>
    <div className={styles.loginspace}>
      <div className={styles.loginCont}>

        <Image 
          
        />
          
        
        <h1>Let's Catch em' all</h1>
        <div className={styles.loginCont}>
          
            <form onSubmit={handleSubmit}>
              <h2 className={styles.greyheader}>please enter your details</h2>
              <div>
                <div>
                <div className={styles.Inputspacing}>
                  <label className={styles.Labelheader}>Email</label>
                  <input className={styles.Logincont}
                    placeholder="Email..."
                    onChange={(event) => {
                      setLoginEmail(event.target.value)
                    }}
                  />
                </div>
                  <label className={styles.Labelheader}>Password</label>
                  <input className={styles.Logincont}
                    placeholder="Password..."
                    onChange={(event) => {
                      setLoginPassword(event.target.value)
                    }}
                  />
                </div>
                <div className={styles.Buttonspacing}> 
                <button onClick={login} type="button" className={styles.button}><a href="/home">Sign In</a></button>
                </div>
              </div>
            </form>

            <div className="relative">
              <h2>User Logged in:</h2>
              <div className="flow-root m-2 p-2">
                {user?.email}
              </div>
              <div className={styles.Buttonspacing}> 
              <button onClick={logout} type="button" className={styles.button}>Sign Out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


