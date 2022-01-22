import React from "react";

const useLocalStorage = (itemName, initialValue = []) => {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
            try {

                // throw Error('my custom error');
                const data = localStorage.getItem(itemName);

                if (data) {
                    const itemFromStorage = JSON.parse(localStorage.getItem(itemName));
                    setItem(itemFromStorage);
                }

            } catch (error) {
                console.error(error);
                setError(error);
            } finally {
                setLoading(false);
            }

        }, 5 * 1000);
    }, [itemName]);

    const saveItem = (item) => {
        localStorage.setItem(itemName, JSON.stringify(item));
        setItem(item);
    }

    return { // por convención, si se devuelve más de un estado, se usará un objeto como valor de retorno
        item,
        saveItem,
        loading,
        error
    };

}

export { useLocalStorage };