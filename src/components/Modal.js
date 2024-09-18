import React from "react";

const Modal = ({ handleClose, show, children }) => {
    if(!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onclose}>Cerrar</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;