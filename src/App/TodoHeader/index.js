import React from 'react';
import './TodoHeader.css';

function TodoHeader({ isLoading, children }) {

    // React.cloneElement solo funciona con un solo elemento
    // const clonedElement = React.cloneElement(children, {isLoading})

    const arrayChildren = React.Children.toArray(children);

    return (
        <header className="TodoHeader">
            {
                arrayChildren.map(child =>
                    React.cloneElement(child, { isLoading }))
            }
        </header>
    );
}

export { TodoHeader };
