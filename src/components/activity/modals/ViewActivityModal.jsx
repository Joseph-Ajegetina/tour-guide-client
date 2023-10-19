import { Modal, Button, Form } from "react-bootstrap";

function ViewActivityModal({
  show,
  activity,
  location,
  handleClose,
}) {
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
          <Modal.Title>View Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-sm-6 mb-3">
                <Form.Floating className="mb-4">
                  <Form.Control
                    className="b"
                    id="floatingInputCustom"
                    type="text"
                    value={activity.title}
                    placeholder="City Name"
                    readOnly
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
                    value={activity.category}
                    readOnly
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
                    value={activity.duration}
                    readOnly
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
                    value={activity.price}
                    readOnly
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
                    value={activity.description}
                    readOnly
                  />
                </Form.Group>
              </div>
              <div className="col-sm-12 mb-5">
                <label htmlFor="">Location</label>
                <Form.Select
                  aria-label="Default select example"
                  value={activity.location.city}
                  disabled
                >
                  <option>{location.city}</option>
                </Form.Select>
              </div>
              <div className="col-sm-12 mb-5">
                <p>Inclusions:</p>
                <ul className="list-group mt-3">
                  {activity.inclusions.map((include, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{include}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-12 mb-3">
                <p>Requirements:</p>
                <ul className="list-group mt-3">
                  {activity.requirements.map((require, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span>{require}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {activity.images.length > 0 && <div className="col-sm-12 mb-3">
                <label htmlFor="">Activity Image:</label>
                  <div
                    key={activity._id}
                    className="card"
                    style={{ width: "18rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={activity.images[0]}
                      alt="Card cap"
                    />
                  </div>
               
              </div>
               }
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
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default ViewActivityModal;
