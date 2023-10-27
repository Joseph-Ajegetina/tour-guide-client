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
  Image,
  Text
} from "@chakra-ui/react";

function CreateLocationModal({ show, handleClose, handleCreate }) {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSave = () => {
    const requestBody = { city, country, description };
    
    handleCreate(requestBody, selectedImage);
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
        <ModalHeader>New Location</ModalHeader>
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
          <VStack mt={'md'}>
              <FormControl>
                <FormLabel htmlFor="requirements" fontWeight={"normal"}>
                  Image
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
                  <Text>Image Selected</Text>

                  <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    width="150"
                  />
                </div>
              )}
            </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSave}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateLocationModal;
