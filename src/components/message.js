import React from 'react';

const Message = ({children}) => {
    return (
        <div className="alert alert-secondary" role="alert">
            {children}
        </div>
    );
};

export default Message;