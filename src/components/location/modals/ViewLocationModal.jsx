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

function ViewLocationModal({ show, location, handleClose,handleView }) {
  const [city, setCity] = useState(location.city);
  const [country, setCountry] = useState(location.country);
  const [description, setDescription] = useState(location.description);


  return (
    <Modal blockScrollOnMount={false} isOpen={show} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Location Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City Name"
              disabled
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Country</FormLabel>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country Name"
              disabled
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about this place"
              disabled
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ViewLocationModal;
