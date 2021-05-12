import React from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70" style={ {'strokeDashoffset': 440 - (440 * props.percent) / 100 } }> </circle>
            </svg>
        </div>
    );
};

export default ProgressBar;