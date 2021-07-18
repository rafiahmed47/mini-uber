import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { userContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    } else {
    firebase.app(); // if already initialized, use that one
    }
const Login = () => {
    const [login, setLogin] = useState({
        isSignedIn: false,
        name: '',
        email:'',
        photo: ''
    });

// state
const [loggedInUser, setLoggedInUser] = useContext(userContext)
// google sign in
    const handleSignIn = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then(res => {
                const {displayName, email, photoURL} = res.user;
                const signInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLogin(signInUser)
            })
    }
    // Google signOut
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res =>{
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                password: ''
            }
            setLogin(signOutUser)
        })
    }
// set user ingormation in state
    const handleBlur = (e) =>{
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)
        }
        if (e.target.name === 'password') {
            const lengthValid = e.target.value.length > 7;
            const passwordNumberValid = /\d{1}/.test(e.target.value)
            isFieldValid = lengthValid && passwordNumberValid;
        }
        if (isFieldValid) {
            const newUserInfo = {...login}
            newUserInfo[e.target.name] = e.target.value;
            setLogin(newUserInfo);
        }
    }
    const  handleSubmit = () => {
        if (login.email && login.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
            })
            .catch((error) => {
                var errorMessage = error.message;
            });
        }
    }
    return (
        <div>
           {login.isSignedIn ?  <button onClick={handleSignOut}>Log Out</button>
           : <button onClick={handleSignIn}>Log in using Google</button>}
            {
                login.isSignedIn && <div>
                    <p>welcome: {login.name}</p>
                </div>
            }
         <h1>Our own authentication</h1>
         <form onSubmit={handleSubmit}>
             <input type="text" name="email" onBlur={handleBlur} id="" placeholder="Your email"/>
             <br />
             <input type="text" name="password" onBlur={handleBlur} placeholder="Your password" />
             <br />
             <input type="submit" value="Sign In" />
         </form>
        </div>
    );
};

export default Login;