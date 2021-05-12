import React from 'react';
import './CounterTimer.css';
import './CounterTimer.css';
import ProgressBar from './ProgressBar/ProgressBar.jsx';
const CounterTimer = (props) => {
    let percent = 0;
    if ((props.lastDate - props.startDate) !== 0){
        percent = (props.currentDate - props.startDate) / (props.lastDate - props.startDate) * 100;
    }
    return ( 
        <div className="clock-counter"> 
            <ProgressBar 
                percent={percent}
            />
            <div className="clock-timer">
                {props.currentDate}
            </div>
            <div className="clock-unit">
                {props.unit}
            </div>
        </div>
    );
};
export default CounterTimer;