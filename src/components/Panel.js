import React from 'react';
import classNames from 'classnames';

export const Panel = ({children, className, ...rest}) => {

    //common classes
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );
    return (
        <div {...rest} className={finalClassNames}>
            {children}
        </div>
    );
};
