import React, { useState } from "react";
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function UpdateLocationModal({ show, location, handleClose,handleUpdate   }) {
  const [city, setCity] = useState(location.city);
  const [country, setCountry] = useState(location.country);
  const [description, setDescription] = useState(location.description);

  const handleSave = () => {
    const requestBody = {city, country}
    handleUpdate(location._id, requestBody);
  }

  return (
    <Modal blockScrollOnMount={false} isOpen={show} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Location</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City Name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Country</FormLabel>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country Name"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about this place"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSave}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default UpdateLocationModal;
