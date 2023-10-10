import React from "react";
import { Button} from "react-bootstrap";
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";
import CreateActivityModal from "./modals/CreateActivityModal";
import activitiesService from "../../services/activity.service";
import UpdateActivityModal from "./modals/UpdateActivityModal";
import ViewActivityModal from "./modals/ViewActivityModal";
import DeleteActivityModal from "./modals/DeleteActivityModal";
import Search from "../Search";
import { useEffect } from "react";

function ActivityTable() {
  const [activities, setActivities] = useState([
    {
      _id: "20",
      title: "Paga Crocodile Pond",
      duration: "2h 30mins",
      category: "culture",
      price: "ghc100",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  const handleCloseUpdateModal = () => {
    setSelectedActivity(null);
    setShowUpdateModal(false);
  };

  const handleShowUpdateModal = (id) => {
    getActivityDetails(id);
    setShowUpdateModal(true);
  };

  const handleCloseDeleteModal = (id) => {
    getActivityDetails(id);
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (id) => {
    getActivityDetails(id);
    setShowDeleteModal(true);
  };

  const handleShowViewModal = (id) => {
    getActivityDetails(id);
    setShowViewModal(true);
  };

  const handleCloseViewModal = (id) => {
    setSelectedActivity(null);
    setShowViewModal(false);
  };

  const handleCreate = () => {
    console.log("creating");
  };

  const handleUpdate = () => {
    console.log("we will update");
  };

  const handleDelete = () => {
    console.log("handlng the view delete");
  };

  const getActivityDetails = async (id) => {
    try {
      setIsLoading(true);
      const res = await activitiesService.getActivity(id);
      console.log(res);
      setSelectedActivity(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
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
    try {
      const res = await activitiesService.getAllActivities();

      setActivities(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllActivities();
    handleSearch("");
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
              <b>Activitys</b>
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
                        <td>{activity.requirements}</td>
                        <td>{activity.inclusion}</td>
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
        <CreateActivityModal
          show={showCreateModal}
          handleClose={handleCloseCreateModal}
          handleCreate={handleCreate}
          selectedActivity={selectedActivity}
        />

        {/* Update Activity */}
        <UpdateActivityModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          handleUpdate={handleUpdate}
          selectedActivity={selectedActivity}
        />

        {/* View Activity */}
        <ViewActivityModal
          show={showViewModal}
          handleClose={handleCloseViewModal}
          selectedActivity={selectedActivity}
        />

        {/* Delete */}
        <DeleteActivityModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
          handleDelete={handleDelete}
          selectedActivity={selectedActivity}
        />
      </div>
    </div>
  );
}

export default ActivityTable;
