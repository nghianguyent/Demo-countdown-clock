import { Snackbar } from '@material-ui/core';
import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import './Input.css'
const Input = (props) => {
    return ( 
        <div className="input-form">
            <DebounceInput 
                minLength={4}
                debounceTimeout={300}
                id={props.type} 
                type={props.type} 
                onChange={props.eventOnChange}
                onblur={props.eventOnChange}
                placeholder={props.placeholder} 
                required
            />
            {props.type === 'checkbox' ?
            <label htmlFor={props.type}>
                I accept the <a href="#">rule</a> in the club.
            </label>
            : <></>
            }
        </div>
    );
};

export default Input;