import React, { useState } from 'react';
import Input from './Input/Input.jsx';
import './SignUpDialog.css';
import { Snackbar } from '@material-ui/core';
const SignUpDialog = (props) => {
    // form state
    const [userEmail, setEmail] = useState();
    const [username, setUsername] = useState("");
    const [userPassword, setPassword] = useState("");
    // event state
    const [open, setOpen] = useState(false);
    const [notification, setNotification] = useState("");
    const [isSuccess, setIsSuccess] = useState("");

    // check valid 
    const notifyContext = (text, context) => {
        setNotification(text);
        setOpen(true);
        setIsSuccess(context);
    }
    const validEmail = (email) => {
        //validate string
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(String(email).toLowerCase());
        if (email === ""){
            notifyContext("Please enter your email", "wrong-input");
            return false;
        };
        if (!isValid){
            notifyContext("Please use the right form: abcd@xzy.com", "wrong-input");
            return false;
        };
        setOpen(false);
        return true;
    }
    const validUsername = () => {
        if (username === ""){
            notifyContext("Please enter your username", "wrong-input");
            return false;
        };
        if (username.length <= 3){
            notifyContext("Your username has at least 3 character", "wrong-input");
            return false;
        };
        setOpen(false);
        return true;
    }
    const validPassword = () => {
        if (username === ""){
            notifyContext("Please enter your password", "wrong-input");
            return false;
        };
        if (username.length <= 3){
            notifyContext("Your password has at least 3 character", "wrong-input");
            return false;
        };
        setOpen(false);
        return true;
    }
    const agreeWithRules = () => {
        
    }
    // Input form
    const inputEmail = (e) =>{
        setEmail(e.target.value);
        validEmail(userEmail);
    };
    const imputCheckbox = (e) => {
        agreeWithRules(e.target.val)
    }
    
    const checkValidate =  () => {
        
    }
    const submitData = (e) => {
        e.preventDefault();
        let validToSubmit = validEmail();
        if (validToSubmit){
            setOpen(true);
            notifyContext("You successfully joined","");
            return true;
        }else {
            return false;
        }
    };
    // Events
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
      };
    // render DOM
    return (
        <div className="signup-container">
            <div className="content-container">
                <div className="description">
                    <h2>Over 100 people joined.</h2>
                    <h2>Waiting for you to make this more interesting.</h2>
                    <p>How can you survive for this party? It's depend on you.</p>
                </div>
                <form className="input-form" onSubmit={submitData}>
                    <Input type="email" placeholder="Your Email" icon="ef12" eventOnChange={inputEmail}/>
                    <Input type="username" placeholder="Your Username" icon=""/>
                    <Input type="password" placeholder="Your Password" icon=""/>
                    <Input type="checkbox" icon=""/>
                    <button className="submit-button" onClick={submitData}  >Submit</button>
                </form>
                <Snackbar 
                    className="snack-bar-container" 
                    open={open} 
                    anchorOrigin={ { vertical: 'top', horizontal: 'center'} }
                    
                    onClose={handleClose}
                >
                    <div className={"snack-bar " + isSuccess}>{notification}</div>
                </Snackbar>
            </div>
            
        </div>
    );
}

export default SignUpDialog;