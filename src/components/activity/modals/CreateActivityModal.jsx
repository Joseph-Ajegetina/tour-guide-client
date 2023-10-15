import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateActivityModal({
  show,
  handleClose,
  handleCreate,
  handleUpload,
  locationOptions,
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(5.0);
  const [duration, setDuration] = useState(3);
  const [include, setInclude] = useState("");
  const [inclusions, setInclusions] = useState([]);
  const [requirement, setRequirement] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleRequirement = (e) => {
    setRequirement(e.target.value);
  };

  const handleInclude = (e) => {
    setInclude(e.target.value);
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
    const requestBody = {
      title,
      category,
      description,
      price,
      duration,
      inclusions,
      requirements,
      location,
      images
    };
    handleUpload(images)
    // handleCreate(requestBody);
  };

  const addInclusion = () => {
    if (include === "") {
      return;
    }
    setInclusions([...inclusions, include]);
    setInclude("");
  };

  const removeInclusion = (value) => {
    const updatedInclusions = inclusions.filter((include) => include !== value);
    setInclusions(updatedInclusions);
  };

  const addRequirement = () => {
    if (requirement === "") {
      return;
    }
    setRequirements([...requirements, requirement]);
    setRequirement("");
  };

  const addInclusionFromEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addInclusion();
    }
  };

  const addRequirementFromEnterKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addRequirement();
    }
  };
  const removeRequirement = (value) => {
    const updatedRequirements = requirements.filter(
      (include) => include !== value
    );
    setRequirements(updatedRequirements);
  };

  const addImage = (e) => {
    const newImage = e.target.files[0];
    setImages((prevImages) => [...prevImages, newImage]);
    console.log(images);
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
              <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="number"
                    value={duration}
                    onChange={handleDuration}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">Duration</label>
                </Form.Floating>
              </div>
              <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="decimal"
                    value={price}
                    onChange={handlePrice}
                    placeholder="City Name"
                  />
                  <label htmlFor="floatingInputCustom">Price</label>
                </Form.Floating>
              </div>
              <div className="col-sm-12 mb-3">
                <Form.Group className="mb-4">
                  <label htmlFor="floatingInputCustom">Description</label>
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    as="textarea"
                    rows={2}
                    value={description}
                    onChange={handleDescription}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-12 mb-5">
                <Form.Select
                  aria-label="Default select example"
                  value={location}
                  onChange={handleLocation}
                >
                  <option>Select location</option>
                  {locationOptions.length &&
                    locationOptions.map((location) => {
                      return (
                        <option key={location._id} value={location._id}>
                          {location.city}
                        </option>
                      );
                    })}
                </Form.Select>
              </div>
              <div className="col-sm-12 mb-5">
                <div className="items-wrapper d-flex align-items-center gap-3">
                  <Form.Group className="w-100">
                    <Form.Control
                      className="b"
                      id="floatingInputCustom"
                      type="text"
                      value={include}
                      onChange={handleInclude}
                      onKeyDown={addInclusionFromEnterKey}
                      placeholder="What does it include"
                    />
                  </Form.Group>
                  <Button
                    variant="secondary"
                    onClick={addInclusion}
                    className="btn"
                  >
                    Add
                  </Button>
                </div>

                <ul className="list-group mt-3">
                  {inclusions.map((include, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{include}</span>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeInclusion(include);
                        }}
                        className="h-38"
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-12 mb-3">
                <div className="items-wrapper d-flex align-items-center gap-3">
                  <Form.Group className="w-100">
                    <Form.Control
                      className="b"
                      id="floatingInputCustom"
                      type="text"
                      value={requirement}
                      onChange={handleRequirement}
                      onKeyDown={addRequirementFromEnterKey}
                      placeholder="What does it require"
                    />
                  </Form.Group>
                  <Button
                    variant="secondary"
                    onClick={addRequirement}
                    className="btn"
                  >
                    Add
                  </Button>
                </div>

                <ul className="list-group mt-3">
                  {requirements.map((require, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{require}</span>
                      <Button
                        variant="danger"
                        onClick={() => {
                          removeRequirement(require);
                        }}
                        className="h-38"
                      >
                        Remove
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-12 mb-5">
                <input type="file" multiple onChange={(e) => addImage(e)} />
                <ul>
                  {images.map((image) => (
                    <li key={image.name}>{image.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            className=" btn-lg px-5"
            variant="danger"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="success"
            onClick={handleSave}
            className="btn-lg px-5"
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
