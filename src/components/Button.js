import React from 'react';
import classnames from 'classnames';


export const Button = ({
                           children,
                           primary,
                           secondary,
                           success,
                           warning,
                           danger,
                           outlined,
                           rounded,
                           ...rest
                       }) => {

    const classes = classnames('flex items-center px-3 py-1.5 border m-3',{
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outlined
    });
    return (
        <div>
            <button {...rest} className={classes}>{children}</button>
        </div>
    );
};

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger, rounded, outlined})=>{
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!rounded)
            + Number(!!outlined)
            + Number(!!danger);

        if(count > 1){
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    }
}