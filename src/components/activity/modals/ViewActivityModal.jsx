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
  Stack,
  HStack,
  Box,
  Image,
  Heading,
} from "@chakra-ui/react";

function ViewActivityModal({ show, activity, location, handleClose }) {
  return (
    <Modal size={"3xl"} isOpen={show} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Activity Details</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6}>
            <HStack>
              <FormControl mr="5%">
                <FormLabel htmlFor="title" fontWeight={"normal"}>
                  Title
                </FormLabel>
                <Input
                  readOnly
                  id="title"
                  name="title"
                  value={activity.title}
                  placeholder="Name of the activity"
                />
              </FormControl>

              <FormControl mr="5%">
                <FormLabel htmlFor="category" fontWeight={"normal"}>
                  Category
                </FormLabel>
                <Input
                  readOnly
                  id="category"
                  name="category"
                  value={activity.category}
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
                  readOnly
                  id="duration"
                  type="number"
                  name="duration"
                  value={activity.duration}
                  placeholder="How long"
                />
              </FormControl>

              <FormControl mr="5%">
                <FormLabel htmlFor="price" fontWeight={"normal"}>
                  Price
                </FormLabel>
                <Input
                  readOnly
                  type="number"
                  id="price"
                  name="price"
                  value={activity.price}
                  placeholder="Cost"
                />
              </FormControl>
            </HStack>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
              readOnly
                value={activity.description}
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
                focusBorderColor="brand.400"
                shadow="sm"
                size="sm"
                w="full"
                rounded="md"
                value={activity.location.city}
                disabled
              >
                <option>{location.city}</option>
              </Select>
            </FormControl>
            <Box>
            <Heading as="h6" size="xs">
                  Inclusions
                </Heading>
              <Stack>
                {activity.inclusions.map((include, index) => (
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
                  </HStack>
                ))}
              </Stack>
            </Box>
            <Box>
              <Stack spacing={3} mt={3}>
                <Heading as="h6" size="xs">
                  Requirements
                </Heading>

                {activity.requirements.map((require, index) => (
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
                  </HStack>
                ))}
              </Stack>
            </Box>
            <Box>
              <Heading as={'h6'} size={'xs'}>Image</Heading>
              {activity.images.length > 0 && (
                <Box boxSize="sm">
                  <Image src={activity.images[0]} alt={activity.title} />
                </Box>
              )}
            </Box>
          </Stack>
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

export default ViewActivityModal;
