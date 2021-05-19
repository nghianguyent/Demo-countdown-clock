import React, { useState } from 'react';
import Input from './Input/Input.jsx';
import './SignUpDialog.css';
const SignUpDialog = (props) => {
    const [userEmail, setEmail] = useState({});
    const [username, setUsername] = useState("");
    const [userPassword, setPassword] = useState("");
    
    // Input form
    const inputEmail = (e) =>{
        setEmail(
            {value: e.target.value, validate: ''}
        );  
        
    };
    // check valid 
    const validEmail = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isValid = re.test(String(userEmail.value).toLowerCase());
        if (userEmail.value === ""){
            userEmail.validate = "Please enter your email";
            return;
        }
        if (!isValid){
            userEmail.validate = "Please use the right form: abcd@xzy.com";
        };
    }
    const submitData = (e) => {
        e.preventDefault();
        validEmail(e);
    };
    return (
        <div className="signup-container">
            <div className="content-container">
                <div className="description">
                    <h2>Over 100 people joined.</h2>
                    <h2>Waiting for you to make this more interesting.</h2>
                    <p>How can you survive for this party? It's depend on you.</p>
                </div>
                <form className="input-form" onSubmit={submitData}>
                    <Input type="email" placeholder="Your Email" icon="ef12" eventOnChange={inputEmail} validate={userEmail.validate}/>
                    <Input type="User name" placeholder="Your Username" icon=""/>
                    <Input type="password" placeholder="Your Password" icon=""/>
                    <Input type="checkbox" icon=""/>
                    <button className="submit-button" onClick={submitData}  >Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUpDialog;