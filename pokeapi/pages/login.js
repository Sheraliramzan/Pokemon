//Sign in existing users
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
//ash's email is ashketchum@pokemon.com and his password is pikachu
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });