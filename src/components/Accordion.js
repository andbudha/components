import React, {useState} from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export const Accordion = ({ items }) => {
    //Accordion expanding/collapsing state
    const[expandedIndex, setExpandedIndex]= useState(-1);

    //Accordion operating func
    const handleClick = (index) => {
        if(index===expandedIndex){
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(index);
        }
    }
    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span className={'text-2xl'}>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return(
            <div key={item.id}>
                <div
                    className={'flex items-center justify-between p-3 bg-gray-50 border-b cursor-pointer'}
                    onClick={()=>handleClick(index)}
                >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className={'border-b p-5'}>{item.content}</div>}
            </div>
        );
    });
    return (
        <div className={'border-x border-t rounded'}>
            {renderedItems}
        </div>
    );
};
