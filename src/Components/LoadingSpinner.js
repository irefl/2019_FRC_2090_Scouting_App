import React from 'react';
import Spinner from 'react-loader-spinner';

const LoadingSpinner = () => <><div style={{
    margin: 'auto',
    marginTop: 50,
    textAlign: 'center'
}}><Spinner
        type="Oval"
        color="#005696"
        height="100"
        width="100"
    /></div></>;

export default LoadingSpinner;