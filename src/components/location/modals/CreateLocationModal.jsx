import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import locationsService from "../../../services/location.service";

function CreateLocationModal({ show, handleClose,handleCreate   }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleSave = () => {
    const requestBody = {city, country}
    handleCreate(requestBody);
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
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Floating className="mb-4">
              <Form.Control
                className="b"
                id="floatingInputCustom"
                type="text"
                value={city}
                onChange={handleCity}
                placeholder="City Name"
              />
              <label htmlFor="floatingInputCustom">City</label>
            </Form.Floating>
            <Form.Floating className="mb-4">
              <Form.Control
                className="bg-da"
                id="floatingInputCustom"
                type="text"
                value={country}
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
              onClick={handleSave}
              className="btn-outline-light btn-lg px-5"
            >
              Create
            </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default CreateLocationModal;
