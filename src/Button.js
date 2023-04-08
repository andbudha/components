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
            <button>{children}</button>
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