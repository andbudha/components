import React, {useState} from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export const Accordion = ({ items }) => {
    //Accordion expanding/collapsing state
    const[expandedIndex, setExpandedIndex]= useState(0);





    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const icon = <span>{isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}</span>

        return(
            <div key={item.id}>
                <div
                    className={'bg-amber-200 flex items-center'}
                    onClick={()=>setExpandedIndex(index)
                }>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className={'bg-orange-50'}>{item.content}</div>}
            </div>
        );
    });
    return (
        <div>
            {renderedItems}
        </div>
    );
};
