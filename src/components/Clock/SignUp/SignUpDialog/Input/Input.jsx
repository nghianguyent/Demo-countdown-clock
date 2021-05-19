import React from 'react';
import './Input.css'
const Input = (props) => {
    return ( 
        <div className="input-form">
            <input 
                id={props.type} 
                type={props.type} 
                placeholder={props.placeholder} 
                required
                onChange={props.eventOnChange}
                onSubmit={props.eventOnChange}
            ></input>
            {props.type === 'checkbox' ?
            <label htmlFor={props.type}>
                I accept the <a href="#">rule</a> in the club.
            </label>
            : <></>
            }
            <p className="alert-validate">{props.validate}</p>  
        </div>
    );
};

export default Input;