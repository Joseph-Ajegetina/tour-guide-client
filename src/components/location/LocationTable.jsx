/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import LoadingSpinner from "../loading/LoadingSpinner";
import { useState } from "react";
import CreateLocationModal from "./modals/CreateLocationModal";
import locationsService from "../../services/location.service";
import UpdateLocationModal from "./modals/UpdateLocationModal";
import ViewLocationModal from "./modals/ViewLocationModal";
import DeleteLocationModal from "./modals/DeleteLocationModal";
import Search from "../Search";

import {
  ButtonGroup,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  TableCaption,
  HStack,
  Box,
  Button,
  useToast
} from "@chakra-ui/react";
import { AiFillEdit} from "react-icons/ai";
import {  MdAddCircle } from "react-icons/md";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import useToastMessage from "../../utils/useToastMessage";

function LocationTable() {
  const [locations, setLocations] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const {showToast} = useToastMessage();

  const handleShowCreateModal = () => {
    setShowCreateModal(true)};

  const handleCloseUpdateModal = () => {
    setSelectedLocation(null);
    setShowUpdateModal(false);
  };

  const handleShowUpdateModal = (id) => {
    findSelectedLocationFromId(id);
    setShowUpdateModal(true);
  };

  const handleCloseDeleteModal = (id) => {
    findSelectedLocationFromId(id);
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (id) => {
    findSelectedLocationFromId(id);
    setShowDeleteModal(true);
  };

  const handleShowViewModal = (id) => {
    findSelectedLocationFromId(id);
    setShowViewModal(true);
  };

  const handleCloseViewModal = (id) => {
    setSelectedLocation(null);
    setShowViewModal(false);
  };

  const handleCreate = async (body) => {
    setIsLoading(true);
    try {
      await locationsService.createLocation(body);
      getAllLocations();
      handleCloseCreateModal();
      showToast('New Location', `${body.city} added Successfully`, 'success')
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, body) => {
    setIsLoading(true);
    try {
      await locationsService.updateLocation(id, body);
      getAllLocations();
      handleCloseUpdateModal()
      showToast('Update Location', `${body.city} updated Successfully`, 'success')
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await locationsService.deleteLocation(id);
      getAllLocations();
      showToast('Delete Location', `Location delted Successfully`, 'success')
      handleCloseDeleteModal();
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const findSelectedLocationFromId = (id) => {
    const foundLocation = locations.find((location) => location._id === id);
    setSelectedLocation(foundLocation);
  };

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredData(locations);
      return;
    }
    const termLower = term.toLowerCase();
    const found = locations.filter(
      (location) =>
        location.city.toLowerCase().includes(termLower) ||
        location.country.toLowerCase().includes(termLower)
    );

    setFilteredData(found);
  };

  const getAllLocations = async () => {
    try {
      setIsLoading(true);
      const res = await locationsService.getAllLocations();
      const data = res.data;
      setLocations(data);
      setFilteredData(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllLocations();
  }, []);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Box my={"10"} w={"50"} maxW={'5xl'}>
      <HStack pb={"10"} spacing={3} alignItems="center">
        <Search handleSearch={handleSearch} />
        <Button
          rightIcon={<MdAddCircle />}
          colorScheme="blue"
          variant="outline"
          onClick={handleShowCreateModal}
        >
          Add
        </Button>
      </HStack>
      <TableContainer w={"full"} minW={"lg"}>
        <Table variant="striped">
          <TableCaption>Where activities can be found.</TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>City</Th>
              <Th>Country</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((location, index) => {
              return (
                <Tr key={location._id}>
                  <Td>{index + 1}</Td>
                  <Td>{location.city}</Td>
                  <Td>{location.country}</Td>
                  <Td>
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                        aria-label="Up"
                        onClick={() => handleShowViewModal(location._id)}
                      />
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                        onClick={() => handleShowUpdateModal(location._id)}
                      />
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                        onClick={() => handleShowDeleteModal(location._id)}
                      />
                    </ButtonGroup>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>

      {/* <!--- Model Box ---> */}
      {/* New location */}
      {showCreateModal && (
        <CreateLocationModal
          show={showCreateModal}
          handleClose={handleCloseCreateModal}
          handleCreate={handleCreate}
        />
      )}

      {/* Update location */}
      {showUpdateModal && (
        <UpdateLocationModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          handleUpdate={handleUpdate}
          location={selectedLocation}
        />
      )}

      {/* View location */}
      {showViewModal && (
        <ViewLocationModal
          show={showViewModal}
          handleClose={handleCloseViewModal}
          location={selectedLocation}
        />
      )}

      {/* Delete */}
      {showDeleteModal && (
        <DeleteLocationModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
          handleDelete={handleDelete}
          location={selectedLocation}
        />
      )}
    </Box>
  );
}

export default LocationTable;
