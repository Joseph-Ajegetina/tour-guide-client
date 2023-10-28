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
  VStack,
  Box,
  Image,
} from "@chakra-ui/react";

function UpdateLocationModal({ show, location, handleClose, handleUpdate }) {
  const [city, setCity] = useState(location.city);
  const [country, setCountry] = useState(location.country);
  const [description, setDescription] = useState(location.description);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSave = () => {
    const requestBody = { city, country, description };
    handleUpdate(location._id, requestBody, selectedImage);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

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

          <FormControl mt={4} mb={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about this place"
            />
          </FormControl>
          <VStack>
            <FormControl maxWidth={"80"} mr={"auto"}>
              <FormLabel htmlFor="requirements" fontWeight={"normal"}>
                Select image
              </FormLabel>
              <Input
                id="requirements"
                type="file"
                onChange={handleImageSelect}
                accept="image/*"
              />
            </FormControl>
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

            {!selectedImage && (
              <>
                {location.image && (
                  <Box boxSize="sm">
                    <Image src={location.image} alt={location.name} />
                  </Box>
                )}
              </>
            )}
          </VStack>
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
