import React from "react";

/**
 * High Order Component 
 * @param {*} WrappedComponent 
 * @returns 
 */
function withStorageListener(WrappedComponent) {
    return function (props) {

        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            window.addEventListener('storage', (data) => {
                if (data.key === 'tasks') {
                    console.log('Hubo cambios', data);
                    setStorageChange(true);
                }
            });
        }, []);

        const synchronize = () => {
            setStorageChange(false);
            props.synchronize();
        };

        return (
            <WrappedComponent
                show={storageChange}
                toggleShow={synchronize}
            />
        )
    };
}

export { withStorageListener };
