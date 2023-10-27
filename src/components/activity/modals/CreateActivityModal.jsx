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
  Select,
  VStack,
  Stack,
  HStack,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

function CreateActivityModal({
  show,
  handleClose,
  handleCreate,
  locationOptions,
}) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    price: 0.0,
    duration: 5,
    inclusions: [],
    requirements: [],
    location: "",
  });

  const [newInclusion, setNewInclusion] = useState("");
  const [newRequirement, setNewRequirement] = useState("");

  const [images, setImages] = useState([]);
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
      setImages([...images, file]);
      setSelectedImage(file);
    }
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

  const handleSave = () => {
    const newActivity = {
      ...formData,
    };

    handleCreate(newActivity, selectedImage);
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
    <Modal size={"3xl"} isOpen={show} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>New Activity</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6}>
            <HStack>
              <FormControl mr="5%">
                <FormLabel htmlFor="title" fontWeight={"normal"}>
                  Title
                </FormLabel>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Name of the activity"
                />
              </FormControl>

              <FormControl mr="5%">
                <FormLabel htmlFor="category" fontWeight={"normal"}>
                  Category
                </FormLabel>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Falls under"
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl mr="5%">
                <FormLabel htmlFor="duration" fontWeight={"normal"}>
                  Duration
                </FormLabel>
                <Input
                  id="duration"
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="How long"
                />
              </FormControl>

              <FormControl mr="5%">
                <FormLabel htmlFor="price" fontWeight={"normal"}>
                  Price
                </FormLabel>
                <Input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Cost"
                />
              </FormControl>
            </HStack>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={formData.description}
                onChange={handleChange}
                name="description"
                placeholder="Description"
              />
            </FormControl>

            <FormControl>
              <FormLabel
                htmlFor="country"
                fontSize="sm"
                fontWeight="md"
                color="gray.700"
                _dark={{
                  color: "gray.50",
                }}
              >
                Location
              </FormLabel>
              <Select
                id="location"
                name="location"
                autoComplete="location"
                placeholder="Select location"
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                value={formData.location}
                onChange={handleChange}
              >
                {locationOptions.length &&
                  locationOptions.map((location) => {
                    return (
                      <option key={location._id} value={location._id}>
                        {location.city}
                      </option>
                    );
                  })}
              </Select>
            </FormControl>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="inclusions" fontWeight={"normal"}>
                  Add Inclusions
                </FormLabel>
                <Input
                  id="inclusions"
                  value={newInclusion}
                  onChange={(e) => setNewInclusion(e.target.value)}
                  onKeyDown={addInclusionFromEnterKey}
                  placeholder="What does it include"
                />
              </FormControl>
              <Stack>
                {formData.inclusions.map((include, index) => (
                  <HStack
                    w={"xl"}
                    justifyContent={"space-between"}
                    key={index}
                    borderRadius={"md"}
                    borderWidth="1px"
                    py={2}
                    px={2}
                  >
                    <Box>{include}</Box>
                    <Button
                      size={"sm"}
                      colorScheme="red"
                      onClick={() => {
                        removeInclusion(include);
                      }}
                    >
                      Remove
                    </Button>
                  </HStack>
                ))}
              </Stack>
            </VStack>
            <VStack>
              <FormControl>
                <FormLabel htmlFor="requirements" fontWeight={"normal"}>
                  Add requirements
                </FormLabel>
                <Input
                  id="requirements"
                  value={newRequirement}
                  onChange={(e) => setNewRequirement(e.target.value)}
                  onKeyDown={addRequirementFromEnterKey}
                  placeholder="What does it include"
                />
              </FormControl>
              <Stack spacing={3} mt={3}>
                {formData.requirements.map((require, index) => (
                  <HStack
                    w={"xl"}
                    justifyContent={"space-between"}
                    key={index}
                    borderRadius={"md"}
                    borderWidth="1px"
                    py={2}
                    px={2}
                  >
                    <Box>{require}</Box>
                    <Button
                      size={"sm"}
                      colorScheme="red"
                      onClick={() => {
                        removeRequirement(require);
                      }}
                    >
                      Remove
                    </Button>
                  </HStack>
                ))}
              </Stack>
            </VStack>
            <VStack>
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
          </Stack>
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

export default CreateActivityModal;
