import { Modal, Button} from "react-bootstrap";

function ProfileLocationModal({ show, location, handleClose, handleFileUpload }) {
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
          <Modal.Title>Upload New Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select your image:</p>
          <input type="file" onChange={handleFileUpload} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Model Box Finsihs */}
    </div>
  );
}

export default ProfileLocationModal;
