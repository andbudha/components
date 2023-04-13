import React, {useState} from 'react';
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";

export const DropDown = ({options, value, onChange}) => {

    //drop-down operating state
    const [isOpen, setIsOpen]=useState(false);

    //drop-down operating func
    const handleClick = () => {
        //setIsOpen(!isOpen);
        //Functional style of state updating
        setIsOpen((currentValue)=>!currentValue);
    }

        //value selecting func
    const handleOptionClick = (option) => {
        //close drop-down
        setIsOpen(!isOpen);
        //option to be chosen
        onChange(option);
    }

    const renderedOptions = options.map(option=>{
        return(
            <div
                key={option.value}
                onClick={()=>handleOptionClick(option)}
                className={'hover:bg-sky-100 rounded cursor-pointer p-1'}
            >
                {option.label}
            </div>
        );
    });

    //icon display conditioning
    const icon = !isOpen ? <HiChevronLeft className={'text-xl'}/> : <HiChevronDown className={'text-xl'}/>;

    return (
        <div className={'w-48 relative m-3'}>
            <div
                onClick={handleClick}
                className={'flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full'}
            >{value?.label || 'Select...'} {icon}</div>
            {isOpen && <div className={'absolute top-full border rounded p-3 shadow bg-white w-full'}>{renderedOptions}</div>}
        </div>
    );
};