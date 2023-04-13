import React, {useState} from 'react';

export const DropDown = ({options}) => {
    //drop-down operating state
    const [isOpen, setIsOpen]=useState(false);

    //drop-down operating func
    const handleClick = () => {
        //setIsOpen(!isOpen);
        //Functional style of state updating
        setIsOpen((currentValue)=>!currentValue);
    }
    const renderedOptions = options.map(option=>{
        return(
            <div key={option.value}>
                {option.label}
            </div>
        );
    })
    return (
        <div>
            <div onClick={handleClick}>Select...</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
};