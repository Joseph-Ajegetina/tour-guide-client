import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UpdateActivityModal({ show, location, handleClose,handleUpdate   }) {
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
          <Modal.Title>Update Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <Form.Floating className="mb-4">
              <Form.Control
                className="bg-dae"
                id="floatingInputCustom"
                type="text"
                value={ location ? location.city: city}
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
                value={ location ? location.country: country}
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
            >
              Update
            </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default UpdateActivityModal;
