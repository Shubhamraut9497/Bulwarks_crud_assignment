import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function ModalB({ index, setShow, show, handleCloseModal, setNewDataF, newDataF,modalIndex,setUserData }) {
  const handleClose = () => setShow(false);
  const handleChangeFn = (e) => {
    setNewDataF({ ...newDataF, [e.target.id]: e.target.value });
  };
  const updateData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/student/${modalIndex}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDataF.name,newDataF.email,newDataF.mobileNo),
      });

      if (response.ok) {
        handleCloseModal();
        
      } else {
        console.error('Failed to update data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to update data:', error);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Name" id="name" value={newDataF.name} onChange={handleChangeFn} />
          <input type="email" placeholder="Email" id="email" value={newDataF.email} onChange={handleChangeFn} />
          <input
            type="number"
            placeholder="Mobile"
            id="mobileNo"
            value={newDataF.mobileNo}
            onChange={handleChangeFn}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateData()}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalB;
