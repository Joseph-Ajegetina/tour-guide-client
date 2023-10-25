// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// function ViewLocationModal({ show, location, handleClose,handleView   }) {
//   const [city, setCity] = useState(location.city);
//   const [country, setCountry] = useState(location.country);

//   const handleCity = (e) => {
//     setCity(e.target.value);
//   };

//   const handleCountry = (e) => {
//     setCountry(e.target.value);
//   };

//   const handleSave = () => {
//     const requestBody = {city, country}
//     handleView(location._id, requestBody);
//     handleClose();
//   }

//   return (
//     <div className="model_box">
//       <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>View Location</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSave}>
//             <Form.Floating className="mb-4">
//               <Form.Control
//                 className="bghite"
//                 id="floatingInputCustom"
//                 type="text"
//                 value={ location ? location.city: city}
//                 onChange={handleCity}
//                 placeholder="City Name"
//                 readOnly={true}
//               />
//               <label htmlFor="floatingInputCustom">City</label>
//             </Form.Floating>
//             <Form.Floating className="mb-4">
//               <Form.Control
//                 className="bg-hite"
//                 id="floatingInputCustom"
//                 type="text"
//                 value={ location ? location.country: country}
//                 onChange={handleCountry}
//                 placeholder="Country Name"
//                 readOnly={true}
//               />
//               <label htmlFor="floatingInputCustom">Country</label>
//             </Form.Floating>
//           </Form>
//         </Modal.Body>

//         <Modal.Footer>

//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Model Box Finsihs */}
//     </div>
//   );
// }

// export default ViewLocationModal;


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
