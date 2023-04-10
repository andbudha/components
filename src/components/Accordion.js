import React from 'react';

export const Accordion = ({ items }) => {

    const renderedItems = items.map((item)=>{
        console.log(item.id)
        return(
            <div key={item.id}>
                <div>{item.label}</div>
                <div>{item.content}</div>
            </div>
        );
    });
    return (
        <div>
            {renderedItems}
        </div>
    );
};
