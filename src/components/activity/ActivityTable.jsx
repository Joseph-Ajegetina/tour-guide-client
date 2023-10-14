import React from "react";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../loading/LoadingSpinner";
import { useState } from "react";
import CreateActivityModal from "./modals/CreateActivityModal";
import activitiesService from "../../services/activity.service";
import UpdateActivityModal from "./modals/UpdateActivityModal";
import ViewActivityModal from "./modals/ViewActivityModal";
import DeleteActivityModal from "./modals/DeleteActivityModal";
import Search from "../Search";
import { useEffect } from "react";
import locationsService from "../../services/location.service";

function ActivityTable() {
  const [activities, setActivities] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [locations, setLocations] = useState([]);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

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

  const handleCreate = async (body) => {
    setIsLoading(true);
    try {
      await activitiesService.createActivity(body);
      getAllActivities();
      handleCloseCreateModal();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, body) => {
    setIsLoading(true);
    try {
      await activitiesService.updateActivity(id, body);
      getAllActivities();
      handleCloseUpdateModal();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await activitiesService.deleteActivity(id);
      getAllActivities();
      handleCloseDeleteModal();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const findSelectedActivityFromId = (id) => {
    const foundActivity = activities.find((activity) => activity._id === id);
    setSelectedActivity(foundActivity);
  };

  const findLocationFromId = (id) => {
    const foundLocation = locations.find((location) => location._id === id);
    return foundLocation
  };

  const handleSearch = (term) => {
    if (term === "") {
      return setFilteredData(activities);
    }

    const found = activities.filter((activity) =>
      activity.title.toLocaleLowerCase().includes(term)
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
      console.log(error);
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
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllActivities();
    getAllLocations();
  }, []);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <Search handleSearch={handleSearch} />
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Activities</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShowCreateModal}>
              New
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive ">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Duration </th>
                  <th>Requirements</th>
                  <th>Inclusion</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!!filteredData ? (
                  filteredData.map((activity, index) => {
                    return (
                      <tr key={activity._id}>
                        <td>{index + 1} </td>
                        <td>{activity.title}</td>
                        <td>{activity.duration}</td>
                        <td>
                          <ul className="list-unstyled">
                            {activity.requirements
                              .slice(0, 2)
                              .map((h, index) => (
                                <li key={index}>{h}</li>
                              ))}
                          </ul>
                        </td>
                        <td>
                          <ul className="list-unstyled">
                            {activity.inclusions.slice(0, 2).map((h, index) => (
                              <li key={index}>{h}</li>
                            ))}
                          </ul>
                        </td>
                        <td>{activity.price}</td>
                        <td>
                          <span
                            onClick={() => {
                              handleShowViewModal(activity._id);
                            }}
                            className="action view"
                            title="View"
                            data-toggle="tooltip"
                            style={{ color: "#10ab80" }}
                          >
                            <i className="material-icons">&#xE417;</i>
                          </span>
                          <span
                            onClick={() => {
                              handleShowUpdateModal(activity._id);
                            }}
                            className="action edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </span>
                          <span
                            onClick={() => {
                              handleShowDeleteModal(activity._id);
                            }}
                            className="action delete"
                            title="Delete"
                            data-toggle="tooltip"
                            style={{ color: "red" }}
                          >
                            <i className="material-icons">&#xE872;</i>
                          </span>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="d-flex w-100 justify-content-center">
                    No data
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        {/* New Activity */}
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
      </div>
    </div>
  );
}

export default ActivityTable;
