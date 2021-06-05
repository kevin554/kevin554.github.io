import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ConfirmationModal({title, actionText, showModal, onConfirmFn, onCloseFn}) {
    function modalClosed() {
        if (onCloseFn) {
            onCloseFn();
        }
    }

    function confirmationClicked() {
        if (onConfirmFn) {
            onConfirmFn();
        }
    }

    return <>
        <Modal centered show={showModal} onHide={modalClosed}>
            <Modal.Header className="border-bottom-0">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Footer className="border-top-0">
                <Button variant="outline" size="sm" onClick={modalClosed}>
                    Cancelar
                </Button>
                <Button variant="outline" size="sm" onClick={confirmationClicked}>
                    {actionText}
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
