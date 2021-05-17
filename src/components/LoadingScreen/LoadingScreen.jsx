import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import './LoadingScreen.css';
const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <h2>Loading...</h2>
            <CircularProgress color="secondary"/>
        </div>
    );
};

export default LoadingScreen;