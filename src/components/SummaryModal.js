import React from 'react'
import TabComponent from './TabComponent'
import { Modal } from 'react-bootstrap';
import '../assets/modal.css'
function SummaryModal(props) {
    const { like, haha, wow, sad, angry, allreactions } = props;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reactions
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TabComponent
                    like={like}
                    haha={haha}
                    wow={wow}
                    sad={sad}
                    angry={angry}
                    allreactions={allreactions}
                />
            </Modal.Body>
        </Modal>
    );
}

export default SummaryModal

