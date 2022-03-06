import React from 'react';
import './Input.css'
const Input = ({value, setValue}) => {
    return (
       <input  type="text"  value={value} onChange = {setValue}  />
    );
};

export default Input;