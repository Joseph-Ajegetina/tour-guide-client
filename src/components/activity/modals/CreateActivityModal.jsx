import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateActivityModal({ show, handleClose, handleCreate }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(null);
  const [duration, setDuration] = useState(null);
  const [inclusions, setInclusions] = useState(null);
  const [requirements, setRequirements] = useState(null);
  const [location, setLocation] = useState(null);
  

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleRequirements = (e) => {
    setRequirements(e.target.value);
  };

  const handleInclusions = (e) => {
    setInclusions(e.target.value);
  };

  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSave = () => {
    const requestBody = { title, category };
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
                    value={title}
                    onChange={handleTitle}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">Title</label>
                </Form.Floating>
              </div>
              <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="text"
                    value={category}
                    onChange={handleCategory}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">Category</label>
                </Form.Floating>
              </div>
              <div className="col-sm-12 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="textarea"
                    value={description}
                    onChange={handleDescription}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">Description</label>
                </Form.Floating>
              </div>
              <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="text"
                    value={duration}
                    onChange={handleDuration}
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
                    value={price}
                    onChange={handlePrice}
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
                    value={inclusions}
                    onChange={handleInclusions}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">City</label>
                </Form.Floating>
                <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="text"
                    value={requirements}
                    onChange={handleRequirements}
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
                    value={location}
                    onChange={handleLocation}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">City</label>
                </Form.Floating>
              </div>
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
