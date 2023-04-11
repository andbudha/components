import React, {useState} from 'react';

export const Accordion = ({ items }) => {
    //Accordion expanding/collapsing state
    const[expandedIndex, setExpandedIndex]= useState(0);




    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;

        const content = isExpanded && <div>{item.content}</div>;
        return(
            <div key={item.id}>
                <div onClick={()=>setExpandedIndex(index)}>{item.label}</div>
                {content}
            </div>
        );
    });
    return (
        <div>
            {renderedItems}
        </div>
    );
};
