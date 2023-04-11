import React, {useState} from 'react';

export const Accordion = ({ items }) => {
    //Accordion expanding/collapsing state
    const[expandedIndex, setExpandedIndex]= useState(0);




    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        console.log(isExpanded);
        return(
            <div key={item.id}>
                <div onClick={()=>setExpandedIndex(index)}>{item.label}</div>
                {isExpanded ?  <div>{item.content}</div> : ''}
            </div>
        );
    });
    return (
        <div>
            {renderedItems}
        </div>
    );
};
