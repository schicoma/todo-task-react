import React from "react";

const useLocalStorage = (itemName, initialValue = []) => {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
    const [isSynchronized, setSynchronized] = React.useState(0);

    React.useEffect((a, b) => {
        setLoading(true);

        setTimeout(() => {
            try {
                // throw Error('Hubo un mini error');
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

        }, 2 * 1000);
    }, [itemName, isSynchronized]);

    const saveItem = (item) => {
        localStorage.setItem(itemName, JSON.stringify(item));
        setItem(item);
    }

    const synchronize = () => {
        setSynchronized((value) => {
            return value + 1;
        });
    }

    return { // por convención, si se devuelve más de un estado, se usará un objeto como valor de retorno
        item,
        saveItem,
        loading,
        error,
        synchronize
    };

}

export { useLocalStorage };