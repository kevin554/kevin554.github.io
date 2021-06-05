import Modal from 'react-bootstrap/Modal';

export default function SceneInfoModal({scene, showModal, onCloseFn}) {
    function modalClosed() {
        if (onCloseFn) {
            onCloseFn();
        }
    }

    return <>
        <Modal centered show={showModal} onHide={modalClosed}>
            <Modal.Header closeButton>
                <Modal.Title>{scene?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Detalles de la escena
            </Modal.Body>
        </Modal>
    </>
}