// import { withStorageListener } from "./withStorageListener";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert(props) {

    const { storageChange, synchronize } = useStorageListener();

    const refresh = () => {
        props.synchronize();
        synchronize();
    }

    if (storageChange) {
        return (
            <div className="ChangeAlert">
                <div className="ChangeAlert--container">
                    <p>Se detectaron cambios en otra ventana. Pulse el botón <b>Actualizar</b> para continuar.</p>
                    <button onClick={refresh}>Actualizar</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

// const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlert };