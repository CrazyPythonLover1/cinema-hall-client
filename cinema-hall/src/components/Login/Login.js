import React, { useContext } from 'react';
import './Login.scss';
import googleLogo from '../../images/logos/google-logo.png';

import firebase from "firebase/app"
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Login = () => {

    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(result => {
            const {displayName, email, photoURL} = result.user;
            console.log(result.user)
            const signedInUser = {name: displayName, email, picture: photoURL}
            setLoggedInUser(signedInUser);
            // storeAuthToken();
        }).catch(function(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return (
        <div className="container-fluid">
            <div className="login">
            <Link to="/" className="logo mb-5" style={{ fontSize:" 2rem", textDecoration:"None"}}> Cinema Hall  </Link>

            <form className=" container login-form px-4" action="">
                <h2 className="text-brand"> Login with </h2>

                <div onClick={handleGoogleSignIn} className="googleLogin">
                    <img className="googleLogo" src={googleLogo} alt="" />
                    <p > Continue with Google</p>
                </div>

                <div>
                    <p> Don't have an account? <Link to="/signup" style={{ color: "#3F90FC" }}> Create an account </Link></p>
                </div>
            </form>
        </div>
        </div>
    );
};

export default Login;