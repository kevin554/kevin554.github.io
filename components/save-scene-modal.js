import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { createScene, updateScene, deleteScene } from '../utils/scenes';

export default function SaveSceneModal({scene, showModal, onCloseFn, onDoneFn}) {
    async function validateForm(event) {
        event.preventDefault();

        let id = event.target["id"].value;
        let title = event.target["title"].value;
        let studio = event.target["studio"].value;
        let date = event.target["date"].value;
        
        let scene = {
            title: title,
            studio: studio,
            date: date,
        };

        if (id) {
            await updateScene(id, scene);
        } else {
            await createScene(scene);
        }

        if (onDoneFn) {
            onDoneFn();
        }

        modalClosed();
    }

    function modalClosed() {
        if (onCloseFn) {
            onCloseFn();
        }
    }

    return <>
        <Modal centered show={showModal} onHide={modalClosed}>
            <Modal.Header>
                <Modal.Title>{scene ? 'Editar escena' : 'Crear escena'}</Modal.Title>
            </Modal.Header>
            <Form onSubmit={validateForm}>
                <Modal.Body>
                    <Form.Control name="id" defaultValue={scene?.id}  />
                    <Row className="pb-2">
                        <Col>
                            <Form.Control placeholder="Titulo" name="title" defaultValue={scene?.title} />
                        </Col>
                    </Row>
                    <Row className="pb-2">
                        <Col>
                            <Form.Control placeholder="Estudio" name="studio" defaultValue={scene?.studio} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Fecha" name="date" defaultValue={scene?.date} />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline" size="sm" onClick={modalClosed}>
                        Cancelar
                    </Button>
                    <Button variant="primary" size="sm" type="submit">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    </>
}
