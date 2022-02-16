import React from "react";

/**
 * High Order Component 
 * @param {*} WrappedComponent 
 * @returns 
 */
function useStorageListener() {

    const [storageChange, setStorageChange] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('storage', (data) => {
            if (data.key === 'tasks') {
                setStorageChange(true);
            }
        });
    }, []);

    const synchronize = () => {
        setStorageChange(false);
    };

    return {
        storageChange,
        synchronize
    };
}

export { useStorageListener };
