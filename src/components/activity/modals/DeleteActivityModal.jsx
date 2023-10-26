import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  ModalFooter,
} from "@chakra-ui/react";

function DeleteActivityModal({ show, activity, handleClose, handleDelete }) {

  return (
    <Modal blockScrollOnMount={false} isOpen={show} onClose={handleClose} size={'xl'} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Location</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
          Are you sure you want to delete activity <Text as={'b'}>{activity.title}</Text>?
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme={'red'} onClick={() => handleDelete(activity._id)}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default DeleteActivityModal;
