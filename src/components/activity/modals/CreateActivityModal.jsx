import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateActivityModal({ show, handleClose, handleCreate }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleSave = () => {
    const requestBody = { city, country };
    handleCreate(requestBody);
    handleClose();
  };

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
          <Modal.Title>New Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSave}>
            <div className="row">
              <div className="col-sm-6 mb-3">
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
              </div>
              <div className="col-sm-6 mb-3">
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
              </div>
              <div className="col-sm-6 mb-3">
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
              </div>
              <div className="col-sm-6 mb-3">
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
              </div>
              <div className="col-sm-6 mb-3">
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
              </div>
              <div className="col-sm-6 mb-3">
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
              </div>
            </div>
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

export default CreateActivityModal;
