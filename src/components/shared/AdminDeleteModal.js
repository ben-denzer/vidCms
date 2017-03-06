import React                from 'react'
import {Modal, Button}      from 'react-bootstrap';
import '../../styles/modal.css';

const AdminDeleteModal = (props) => {
    const {closeModal, commentId, modalFunction, show, userId} = props;
    return (
        <div className="modal-container" style={{height: 200}}>
            <Modal
                show={show}
                onHide={close}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title">
                        Are You Sure You Want To Delete This {commentId ? 'Comment' : 'User'}?</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button bsStyle="danger" onClick={() => modalFunction(commentId, userId)}>Yes</Button>
                    <Button onClick={() => closeModal()}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AdminDeleteModal;