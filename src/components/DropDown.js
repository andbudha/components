import React, {useEffect, useRef, useState} from 'react';
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import {Panel} from "./Panel";

export const DropDown = ({options, value, onChange}) => {


    //drop-down operating state
    const [isOpen, setIsOpen]=useState(false);

    //getting a reference with useRef
    const divEl = useRef();

    //checking on useEffect();
    useEffect(()=>{
        const handler = (event) =>{

            //checking if there is a reference to the element. This solves a lot of bugs.
            if(!divEl.current){
                return;
            }

            if(!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return ()=> {
            document.removeEventListener('click', handler);
        };
    }, []);


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
        <div ref={divEl} className={'w-48 relative m-3'}>
            <Panel
                onClick={handleClick}
                className={'flex justify-between items-center cursor-pointer'}
            >{value?.label || 'Select...'} {icon}
            </Panel>
            {isOpen && <Panel className={'absolute top-full'}>{renderedOptions}</Panel>}
        </div>
    );
};