import React from 'react';
import  "../Button/TestButton.css";

export const TestButton=(props)=>{
    return <button data-testid="TestButton">{props.label}</button>;
}