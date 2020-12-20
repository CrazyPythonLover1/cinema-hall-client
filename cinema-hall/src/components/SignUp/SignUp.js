import React, { useState, useContext } from 'react';
import './SignUp.scss'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { UserContext } from '../../App';

const SignUp = () => {

    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/booking" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }





    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const createUserWithEmailAndPassword = (name,email, password) =>{
        return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = "";
            newUserInfo.success = true;
            updateUserInfo(name);
            verifyEmail();
            return newUserInfo;
        })
        .catch((error) =>{
            const newUserInfo = {}
            newUserInfo.error =  error.message;
            newUserInfo.success = false;
            return newUserInfo;
          });
    }

    const updateUserInfo = (name) => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
        displayName: name,
        }).then(function() {
        // Update successful.
        console.log('user name updated successfully')
        }).catch(function(error) {
        // An error happened.
        console.log(error);
        });
    }
    
    const verifyEmail = () => {
        var user = firebase.auth().currentUser;
    
        user.sendEmailVerification()
        .then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    }

    const signInWithEmailAndPassword = (email, password) =>{
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
        })
        .catch(function(error) {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          return newUserInfo;
        });
     }

    const handleSubmit = (e) => {
        if (newUser && user.name && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        e.preventDefault();
    }

    
    const [ errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});
    const [initialPassword, setInitialPassword] = useState(' ');
    const handleBlur = (e) => {
        let isFieldValid = true;
        
        if (e.target.name === "email") {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
            ?errors["email"]=""
            :errors["email"] = "Please enter valid email address.";
        }
        
        if (e.target.name === "initial_password") {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            if(isPasswordValid && passwordHasNumber){
                setInitialPassword(e.target.value);
                success["initial_password"] = 'Password have a number & characters';
                errors["initial_password"] = "";
            }
            else{
                errors["initial_password"] = " Password should have a number & 6 characters";
                success["initial_password"] = '';
            }
        }
        let password;
        if (e.target.name === "password") {
            password = e.target.value;
            if(JSON.stringify(password)===JSON.stringify(initialPassword)){
                isFieldValid= true;
                success["password"] = 'Password matched';
                errors["password"] = "";
            }
            else{
                errors["password"] = "Password doesn't match! Please ry again";
                success["password"] = '';
            }
            
        }
        
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div>
            <div className="signup" style={{marginBottom: "4rem"}}>

                <form onSubmit={handleSubmit} className="form">
                    <h1> Create an account </h1>
                    <input onBlur={handleBlur} placeholder="First Name " type="text" name="name" id="" />
                        <p style={{color: 'red'}}> {errors.name} </p>
                    
                    <input placeholder="Last Name" type="text" name="lName" id="" />
        
                    <input onBlur={handleBlur} placeholder="Username or Email" type="text" name="email" required id="" />
                        <p style={{color: 'red'}}> {errors.email} </p>
                    
                    <input onBlur={handleBlur} placeholder="Password" type="password"   name="initial_password" required id="" />
                        <p style={{color: 'green'}}> {success.initial_password} </p>
                        <p style={{color: 'red'}}> {errors.initial_password} </p>
                    
                    <input onBlur={handleBlur} placeholder="Confirm Password" type="password" name="password" required id="" />
                        <p style={{color: 'green'}}> {success.password} </p>
                        <p style={{color: 'red'}}> {errors.password} </p>

                    <input className="button" type="submit" value="Create an Account" />

                    <p className="login__option__forgot"> Already have an account? <Link to="/login" onChange={() => setNewUser(!newUser)} className="orange"> Login </Link></p>

                </form>

                

            </div>
        </div>
    );
};

export default SignUp;