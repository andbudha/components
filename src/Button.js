import React from 'react';

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
