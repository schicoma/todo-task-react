import { withStorageListener } from "./withStorageListener";
import './ChangeAlert.css';

function ChangeAlert(props) {

    if (props.show) {
        return (
            <div className="ChangeAlert">
                <div className="ChangeAlert--container">
                    <p>Se detectaron cambios en otra ventana. Pulse el botón <b>Actualizar</b> para continuar.</p>
                    <button onClick={props.toggleShow}>Actualizar</button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };