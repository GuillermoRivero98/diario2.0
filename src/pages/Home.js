import React, {useState} from "react";
import Modal from "../components/Modal";

const Home = () => {

    const[isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h2>BInevenido a Mis Primeros Pasos</h2>
            <p>Este es el sitio principal con noticias y artículos sobre la educación en la primera Infancia</p>
            <button onClick={openModal}>Abrir Modal</button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h3>Este es el contenido del modal</h3>
                <p>Información importante</p>
            </Modal>
        </div>
    );
}

export default Home;