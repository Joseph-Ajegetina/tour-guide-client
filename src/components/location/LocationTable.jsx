import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import LoadingSpinner from "../loading/LoadingSpinner";
import { useState } from "react";
import CreateLocationModal from "./modals/CreateLocationModal";
import locationsService from "../../services/location.service";
import UpdateLocationModal from "./modals/UpdateLocationModal";
import ViewLocationModal from "./modals/ViewLocationModal";
import DeleteLocationModal from "./modals/DeleteLocationModal";
import Search from "../Search";

function LocationTable() {
  const [locations, setLocations] = useState([
    { _id: "20", city: "Navrongo", country: "Ghana" },
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  

  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  const handleCloseUpdateModal = () => {
    setSelectedLocation(null);
    setShowUpdateModal(false);
  };

  const handleShowUpdateModal = (id) => {
    getLocationDetails(id);
    setShowUpdateModal(true);
  };

  const handleCloseDeleteModal = (id) => {
    getLocationDetails(id);
    setShowDeleteModal(false);
  };

  const handleShowDeleteModal = (id) => {
    getLocationDetails(id);
    setShowDeleteModal(true);
  };

  const handleShowViewModal = (id) => {
    getLocationDetails(id);
    setShowViewModal(true);
  };

  const handleCloseViewModal = (id) => {
    setSelectedLocation(null);
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

  const getLocationDetails = async (id) => {
    try {
      setIsLoading(true);
      const res = await locationsService.getLocation(id);
      console.log(res);
      setSelectedLocation(res);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const handleSearch = (term) => {
    if (term === "") {
      return setFilteredData(locations);
    }

    const found = locations.filter(
      (location) =>
        location.city.toLocaleLowerCase().includes(term) ||
        location.country.toLocaleLowerCase().includes(term)
    );

    setFilteredData(found);
  };

  const getAllLocations = async () => {
    try {
      const res = await locationsService.getAllLocations();

      setLocations(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLocations();
    handleSearch('');
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
              <b>Locations</b>
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
                  <th>City </th>
                  <th>Country </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!!filteredData ? (
                  filteredData.map((location, index) => {
                    return (
                      <tr key={location._id}>
                        <td>{index + 1} </td>
                        <td>{location.city}</td>
                        <td>{location.country}</td>
                        <td>
                          <span
                            onClick={() => {
                              handleShowViewModal(location._id);
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
                              handleShowUpdateModal(location._id);
                            }}
                            className="action edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </span>
                          <span
                            onClick={() => {
                              handleShowDeleteModal(location._id);
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
                    No data{" "}
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        {/* New location */}
        <CreateLocationModal
          show={showCreateModal}
          handleClose={handleCloseCreateModal}
          handleCreate={handleCreate}
          selectedLocation={selectedLocation}
        />

        {/* Update location */}
        <UpdateLocationModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          handleUpdate={handleUpdate}
          selectedLocation={selectedLocation}
        />

        {/* View location */}
        <ViewLocationModal
          show={showViewModal}
          handleClose={handleCloseViewModal}
          selectedLocation={selectedLocation}
        />

        {/* Delete */}
        <DeleteLocationModal
          show={showDeleteModal}
          handleClose={handleCloseDeleteModal}
          handleDelete={handleDelete}
          selectedLocation={selectedLocation}
        />
      </div>
    </div>
  );
}

export default LocationTable;
