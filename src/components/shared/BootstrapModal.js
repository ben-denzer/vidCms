import React                from 'react'
import {Modal, Button}      from 'react-bootstrap';
import '../../styles/modal.css';

const BootstrapModal = (props) => {
    console.log('props', props.modalTargetId);
    return (
        <div className="modal-container" style={{height: 200}}>
            <Modal
                show={props.show}
                onHide={close}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title">Contained Modal</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => props.modalFunction(props.modalTargetId)}>Yes</Button>
                    <Button onClick={() => props.closeModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BootstrapModal;