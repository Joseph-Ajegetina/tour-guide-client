import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function UpdateActivityModal({
  show,
  activity,
  locationOptions,
  handleClose,
  handleUpdate,
}) {
  const [formData, setFormData] = useState({
    title: activity.title,
    category: activity.category,
    description: activity.description,
    price: activity.price,
    duration: activity.duration,
    inclusions: activity.inclusions,
    requirements: activity.requirements,
    location: activity.location,
  });

  const [newInclusion, setNewInclusion] = useState("");
  const [newRequirement, setNewRequirement] = useState("");

  const [images, setImages] = useState([activity.images]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSave = () => {
    const upadatedActivity = {
      ...formData,
    };

    handleUpdate(activity._id, upadatedActivity, selectedImage, images);
  };

  const addInclusion = () => {
    if (newInclusion.trim() !== "") {
      setFormData({
        ...formData,
        inclusions: [...formData.inclusions, newInclusion],
      });
      setNewInclusion("");
    }
  };

  const addRequirement = () => {
    if (newRequirement.trim() !== "") {
      setFormData({
        ...formData,
        requirements: [...formData.requirements, newRequirement],
      });
      setNewRequirement("");
    }
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

  const removeImage = (image) => {
    const filterdImages = images.filter((item) => item !== image);
    setImages(filterdImages);
  };

  const removeInclusion = (value) => {
    const updatedInclusions = formData.inclusions.filter(
      (include) => include !== value
    );
    formData({ ...formData, inclusions: [updatedInclusions] });
    setNewInclusion("");
  };

  const removeRequirement = (value) => {
    const updatedRequirements = formData.requirements.filter(
      (include) => include !== value
    );
    setFormData({ ...formData, requirements: updatedRequirements });
    setNewRequirement("");
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
          <Modal.Title>Update Activity</Modal.Title>
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
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
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
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
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
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
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
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
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
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
              <div className="col-sm-12 mb-5">
                <Form.Select
                  aria-label="Default select example"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
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
                      value={newInclusion}
                      onChange={(e) => {
                        setNewInclusion(e.target.value);
                      }}
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
                  {formData.inclusions.map((include, index) => (
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
              <div className="col-sm-12 mb-5">
                <div className="items-wrapper d-flex align-items-center gap-3">
                  <Form.Group className="w-100">
                    <Form.Control
                      className="b"
                      id="floatingInputCustom"
                      type="text"
                      value={newRequirement}
                      onChange={(e) => setNewRequirement(e.target.value)}
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
                  {formData.requirements.map((require, index) => (
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
                <label htmlFor="">Activity Image:</label>
                <div className="row mb-3">
                  <div className="col">
                    <input type="file" onChange={handleImageSelect} />
                    {selectedImage && (
                      <div className="mb-3">
                        <p>Selected Image:</p>
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Selected"
                          width="150"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {activity.images.length > 0 && (
                  <div className="row">
                    {images.map((image) => {
                      return (
                        <div key={activity._id} className="col-md-4">
                          <div
                            key={activity._id}
                            className="card"
                            style={{ width: "18rem" }}
                          >
                            <img
                              className="c ard-img-top"
                              src={image}
                              alt="Card cap"
                            />
                            <div className="card-body">
                              <button
                                onClick={() => {
                                  removeImage(image);
                                }}
                                className="btn btn-danger"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
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
            Update
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default UpdateActivityModal;
