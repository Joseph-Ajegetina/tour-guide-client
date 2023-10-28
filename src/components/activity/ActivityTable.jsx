import React, { useEffect } from "react";
import LoadingSpinner from "../loading/LoadingSpinner";
import { useState } from "react";
import CreateActivityModal from "./modals/CreateActivityModal";
import UpdateActivityModal from "./modals/UpdateActivityModal";
import ViewActivityModal from "./modals/ViewActivityModal";
import uploadService from "../../services/upload.service";
import Search from "../Search";
import activitiesService from "../../services/activity.service";
import locationsService from "../../services/location.service";
import DeleteActivityModal from "./modals/DeleteActivityModal";
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
  useToast,
} from "@chakra-ui/react";
import { AiFillEdit } from "react-icons/ai";
import { MdAddCircle } from "react-icons/md";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import useToastMessage from "../../utils/useToastMessage";

function ActivityTable({ tabToggle }) {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [locations, setLocations] = useState([]);

  const {showToast} = useToastMessage();
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => {
    setShowCreateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setSelectedActivity(null);
    setShowUpdateModal(false);
  };

  const handleShowUpdateModal = (id) => {
    findSelectedActivityFromId(id);
    setShowUpdateModal(true);
  };

  const handleCloseDeleteModal = (id) => {
    findSelectedActivityFromId(id);
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (id) => {
    findSelectedActivityFromId(id);
    setShowDeleteModal(true);
  };

  const handleShowViewModal = (id) => {
    findSelectedActivityFromId(id);
    setShowViewModal(true);
  };

  const handleCloseViewModal = (id) => {
    setSelectedActivity(null);
    setShowViewModal(false);
  };

  const handleCreate = async (body, image) => {
    let payload = body;
    const uploadData = new FormData();
    let imagePath;
    setIsLoading(true);
    try {
      if (image) {
        uploadData.append("imgUrl", image);
        const res = await uploadService.single(uploadData);
        imagePath = res.data.fileUrl;
        payload["images"] = imagePath;
      }

      await activitiesService.createActivity(payload);
      getAllActivities();
      handleCloseCreateModal();
      showToast('New Activity', `${body.title} successfully created`, 'success')
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, body, image, activityImages) => {
    let payload = body;
    const uploadData = new FormData();
    let imagePath;
    setIsLoading(true);
    try {
      if (image) {
        uploadData.append("imgUrl", image);
        uploadService
          .single(uploadData)
          .then((res) => {
            imagePath = res.data.fileUrl;
            payload["images"] = [imagePath];
          })
          .then(async (_) => {
            await activitiesService.updateActivity(id, payload);
            getAllActivities();
            handleCloseUpdateModal();
            showToast('Update Activity', `${body.title} successfully updated`, 'success')
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        payload["images"] = activityImages;
        await activitiesService.updateActivity(id, payload);
        getAllActivities();
        handleCloseUpdateModal();
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await activitiesService.deleteActivity(id);
      getAllActivities();
      handleCloseDeleteModal();
      showToast('Remove Activity', "Activity successfully removed", 'success')
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  const findSelectedActivityFromId = (id) => {
    const foundActivity = activities.find((activity) => activity._id === id);
    setSelectedActivity(foundActivity);
  };

  const findLocationFromId = (id) => {
    const foundLocation = locations.find((location) => location._id === id);
    return foundLocation;
  };

  const handleSearch = (term) => {
    if (term === "") {
      return setFilteredData(activities);
    }

    const found = activities.filter((activity) =>
      activity.title.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredData(found);
  };

  const getAllActivities = async () => {
    setIsLoading(true);
    try {
      const res = await activitiesService.getAllActivities();
      const data = res.data;
      setActivities(data);
      setFilteredData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  const getAllLocations = async () => {
    try {
      setIsLoading(true);
      const res = await locationsService.getAllLocations();
      const data = res.data;
      setLocations(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  useEffect(() => {
    getAllLocations()
  }, [tabToggle]);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <Box my={"10"} w={"50"} maxW={"6xl"}>
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
      <TableContainer w={"full"} minW={"5xl"}>
        <Table variant="striped">
          <TableCaption>
            Manage the activities that will be displayed.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Duration </Th>
              <Th>Requirements</Th>
              <Th>Inclusion</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredData.map((activity, index) => {
              return (
                <Tr key={activity._id}>
                  <Td>{index + 1}</Td>
                  <Td>{activity.title}</Td>
                  <Td>{activity.duration}</Td>
                  <Td>
                    <ul className="list-unstyled">
                      {activity.requirements.slice(0, 2).map((h, index) => (
                        <li key={index}>{h}</li>
                      ))}
                    </ul>
                  </Td>
                  <Td>
                    <ul className="list-unstyled">
                      {activity.inclusions.slice(0, 2).map((h, index) => (
                        <li key={index}>{h}</li>
                      ))}
                    </ul>
                  </Td>
                  <Td>{activity.price}</Td>
                  <Td>
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                        aria-label="Up"
                        onClick={() => handleShowViewModal(activity._id)}
                      />
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                        onClick={() => handleShowUpdateModal(activity._id)}
                      />
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                        onClick={() => handleShowDeleteModal(activity._id)}
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
      {/* New Activity */}{" "}
      {showCreateModal && (
        <CreateActivityModal
          show={showCreateModal}
          handleClose={handleCloseCreateModal}
          handleCreate={handleCreate}
          locationOptions={locations}
        />
      )}
      {/* Update Activity */}
      {showUpdateModal && (
        <UpdateActivityModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          handleUpdate={handleUpdate}
          activity={selectedActivity}
          location={findLocationFromId(selectedActivity.location)}
          locationOptions={locations}
        />
      )}
      {/* View Activity */}
      {showViewModal && (
        <ViewActivityModal
          show={showViewModal}
          handleClose={handleCloseViewModal}
          activity={selectedActivity}
          location={findLocationFromId(selectedActivity.location)}
        />
      )}
      {/* Delete */}
      {showDeleteModal && (
        <DeleteActivityModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
          handleDelete={handleDelete}
          activity={selectedActivity}
        />
      )}
    </Box>
  );
}

export default ActivityTable;
