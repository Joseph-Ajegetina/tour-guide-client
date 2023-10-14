import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


function UpdateLocationModal({ show, location, handleClose,handleUpdate   }) {
  const [city, setCity] = useState(location.city);
  const [country, setCountry] = useState(location.country);

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleSave = () => {
    const requestBody = {city, country}
    handleUpdate(location._id, requestBody);
    handleClose();
  }

  return (
    <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Floating className="mb-4">
              <Form.Control
                className="bg-dae"
                id="floatingInputCustom"
                type="text"
                value={ city}
                onChange={handleCity}
                placeholder="City Name"
              />
              <label htmlFor="floatingInputCustom">City</label>
            </Form.Floating>
            <Form.Floating className="mb-4">
              <Form.Control
                className="bg--white"
                id="floatingInputCustom"
                type="text"
                value={ country}
                onChange={handleCountry}
                placeholder="Country Name"
              />
              <label htmlFor="floatingInputCustom">Country</label>
            </Form.Floating>
          </Form>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
              variant="success"
              type="submit"
              className="btn-outline-light btn-lg px-5"
              onClick={handleSave}
            >
              Update
            </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default UpdateLocationModal;
