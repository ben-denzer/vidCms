import React                from 'react'
import {Modal, Button}      from 'react-bootstrap';
import '../../styles/modal.css';

const BootstrapModal = (props) => {
    return (
        <Modal show={props.show}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Remove this {props.modalTarget}?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => props.closeModalModal()}>Close</Button>
                    <Button bsStyle="primary" onClick={() => props.modalFunction(props.id)}>Yes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
    );
};

export default BootstrapModal;