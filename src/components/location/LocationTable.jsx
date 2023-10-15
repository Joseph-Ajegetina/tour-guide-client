/* eslint-disable react-hooks/exhaustive-deps */
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
  const [locations, setLocations] = useState([]);
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
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, body) => {
    setIsLoading(true);
    try {
      await locationsService.updateLocation(id, body);
      getAllLocations();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    try {
      await locationsService.deleteLocation(id);
      getAllLocations();
      handleCloseDeleteModal();
    } catch (error) {
      console.log(error);
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
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
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
        {showCreateModal && (
          <CreateLocationModal
            show={showCreateModal}
            handleClose={handleCloseCreateModal}
            handleCreate={handleCreate}
            location={selectedLocation}
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
      </div>
    </div>
  );
}

export default LocationTable;
