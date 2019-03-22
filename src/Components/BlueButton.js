import React from 'react';
import { Button } from 'reactstrap';

const BlueButton = ({ style, onClick, children, disabled }) => {
    return <Button
        style={{
            ...style,
            backgroundColor: "#20508b",
        }}
        onClick={onClick ? onClick : () => null}
        disabled={disabled ? true : false}> {children}</Button >
}

export default BlueButton;