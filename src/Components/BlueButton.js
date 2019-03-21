import React from 'react';
import { Button } from 'reactstrap';

const BlueButton = ({ style, onClick, children }) => {
    return <Button
        style={{
            ...style,
            backgroundColor: "#20508b",
        }}
        onClick={onClick ? onClick : () => null}> {children}</Button >
}

export default BlueButton;