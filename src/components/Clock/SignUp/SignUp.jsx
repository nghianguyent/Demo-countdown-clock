import React, { useState } from 'react';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import './SignUp.css'; 
import SignUpDialog from './SignUpDialog/SignUpDialog.jsx';
const SignUp = (props) => {
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);
    return (
        <div className="login-container">
            <h4>Wanna Join in?</h4>
            <button className="login-button" onClick={open} >Sign up Now</button>  
            <DialogOverlay area-label="Login-dialog" isOpen={showDialog} onDismiss={close}>
                <DialogContent className="dialog-container" area-label="login-container" >
                    <SignUpDialog />
                    <button className="back-button">
                        <i className="icofont-arrow-left"></i>
                        <div className="back-text" onClick={close}>
                            Back to the clock
                        </div>
                    </button>
                </DialogContent>
            </DialogOverlay>
        </div>
    );
};

export default SignUp;