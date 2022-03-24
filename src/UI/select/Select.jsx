import React from 'react';

const Select = ({options, defaulValue, value, setValue}) => {
    return (
   
             <select value={value} onChange = {e => setValue(e.target.value)} > 
                <option value="" disabled >{defaulValue}</option>
                {options.map(i => (
                    <option key={i.value} value={i.value}>{i.name}</option>
                ))}
            </select>
      
    );
};

export default Select;