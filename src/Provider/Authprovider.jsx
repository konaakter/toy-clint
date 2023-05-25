import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';





export const AuthContext = createContext(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
   

const Authprovider = ({children}) => {
    const [user, setuser] = useState(null);
    const[loding, setloding] = useState(true);



    const SignIn = (email, password) =>{
        setloding(true);
       return createUserWithEmailAndPassword(auth, email, password);

    }
    const Loginemail= (email, password) => {

        setloding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutemail = () =>{
        setloding(true);
        return signOut(auth);
    }
    const Googlelogin = () =>{
        return signInWithPopup(auth, provider)
    }

    const updatUser = (name, photo) => {
        setloding(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }


    useEffect(() => {

        const unsubscribe =  onAuthStateChanged (auth, currentuser=>{
              console.log('auth sate change', currentuser)
              setuser(currentuser)
              setloding(false)
          })
          return () =>{
              unsubscribe();
          };
  
  
      }, [])


    


    const authinfo = {
        user, 
        SignIn,
        Loginemail,
        loding,
        Googlelogin,
        logOutemail,
        updatUser

         


    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default Authprovider;