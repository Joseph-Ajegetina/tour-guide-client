import { Modal, Button } from "react-bootstrap";

function DeleteLocationModal({ show, location, handleClose, handleDelete }) {
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
          <Modal.Title>Delete Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete location with city <strong>{location.city}</strong>?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDelete(location._id);
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default DeleteLocationModal;
