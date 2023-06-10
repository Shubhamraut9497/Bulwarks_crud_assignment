import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import './UserDetail.css';
import ModalB from './ModalB';

function UserDetails() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [newDataF, setNewDataF] = useState({
    name: '',
    email: '',
    mobileNo: '',
  });
  console.log(userData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/student', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error('Failed to fetch user data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/api/student/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedUserData = userData.filter((user) => user._id !== id);
        setUserData(updatedUserData);
        const data = await response.json();
        alert(`Data of ${data.name} is deleted successfully`);
      } else {
        console.error('Failed to delete data:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Failed to delete data:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalIndex(null);
    setShow(false);
  };

 

  const handleShow = (i) => {
    setIndex(i);
    setModalIndex(userData[i]._id);
    setShow(true);
    const { name, email, mobileNo } = userData[i];
    setNewDataF({
      name,
      email,
      mobileNo,
    });
  };

  return (
    <div className="tableData">
      <div className="container text-center">
        <h2 className="table-heading text-center">User Details</h2>
        <Table striped bordered hover variant="dark" className="custom-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNo}</td>
                <td>
                  {/* <Button variant="primary" onClick={() => handleShow(index)}>
                    Update
                  </Button> */}
                </td>
                <td>
                  <Button variant="primary" onClick={() => deleteData(user._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
            {show && (
              <ModalB
                index={index}
                setShow={setShow}
                show={show}
                newDataF={newDataF}
                setNewDataF={setNewDataF}
                handleCloseModal={handleCloseModal}
                setUserData={setUserData}
              />
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default UserDetails;
