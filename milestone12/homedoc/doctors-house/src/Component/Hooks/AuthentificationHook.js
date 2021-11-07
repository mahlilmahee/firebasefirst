import React, { useEffect } from 'react';
import initializingTheWebApp from '../Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile  } from "firebase/auth";
import { useState } from 'react';

initializingTheWebApp();
const useFirebase=()=>{
   const [user,setUser]=useState({});
   const [error,setError]=useState('');
   const [isLoading,setIsLoading]=useState(true);

    const auth = getAuth();
    
    const emailPasswordCreate=(email,password,history,name)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const newuser={email,displayName:name}
    setUser(newuser);
// send name update information to the firebase 
updateProfile(auth.currentUser, {
  displayName: name
}).then(() => {
}).catch((error) => {

});
    history.replace('/')
    const user = userCredential.user;
    // setUser(user);
    setError('')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
// console.log(errormessage)
    const errorMessage = error.message;
    setError(error.message)

    // ..
  })
  .finally(()=>setIsLoading(false))
    }

    const PasswordSignIn=(email,password,history,location)=>{
      setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
     // Signed in 
     const destination=location?.state?.from;
     history.replace(destination)
        const user = userCredential.user;
        setUser(userCredential.user);
        setError('')
    // ...
                                     })
           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(error.message)
 })
 .finally(()=>setIsLoading(false));
 }
const signOutFromAll=()=>{
     setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser({});
        setError('')
      }).catch((error) => {
        // An error happened.
        setError({})
      })
      .finally(()=>setIsLoading(false));

}
const googleSignIn =(history,location)=>{
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const destination=location?.state?.from;
     history.replace(destination)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    setUser(result.user)
    
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    setError(errorMessage)
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

useEffect(()=>{
   const unSubscribed= onAuthStateChanged(auth,(user)=>{
    if(user){
        setUser(user)
    }
    else{
        setUser({})
    }
  setIsLoading(false)
    })
    return ()=>unSubscribed ;
},[])
    // returing the function with some of the functionalities here 
    return {
        emailPasswordCreate,
        PasswordSignIn,
        signOutFromAll,
        user,
        error,
        isLoading,googleSignIn
    }
}
export default useFirebase ;