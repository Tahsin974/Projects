import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading] = useState(true);
  const auth = getAuth();

  const createUser = () => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      
  };



  const userUpdate = () =>{
    setLoading(true);
    updateProfile(auth.currentUser, {
      displayName: username
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      setError(error)
      // ...
    });
  }

  const signInWithEmailPassword = () =>{
    if(password.length < 6){
      setError('password must be 6 characters')
    }
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  
  }

  
  

  const userSignOut = () =>{
    setLoading(true);
   return signOut(auth)
    
  }

  useEffect(()=> {
    onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
       setUser(user)
       
      }
    });
  },[])

  return {
    user,
    setUserName,setEmail,setPassword,createUser,userUpdate,signInWithEmailPassword,setUser,userSignOut,loading,setError
  };
};

export default useFirebase;
