import React from 'react';
import PropTypes from "prop-types";



export const Button = ({
                           children,
                           primary,
                           secondary,
                           success,
                           warning,
                           danger,
                           outlined,
                           rounded
                       }) => {
    return (
        <div>
            <button className={'px-3 py-1.5 border border-blue-700 bg-blue-500 text-white'}>{children}</button>
        </div>
    );
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger})=>{
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!success)
        + Number(!!warning)
        + Number(!!danger);

        if(count > 1){
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    }
}