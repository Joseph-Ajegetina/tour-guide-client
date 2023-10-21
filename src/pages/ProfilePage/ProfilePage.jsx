import "./ProfilePage.css";
import React, { useEffect } from "react";
import uploadService from "../../services/upload.service";
import userService from "../../services/user.service";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useState } from "react";
import { Form } from "react-bootstrap";
import ProfileLocationModal from "./ProfileModal";
import LoadingButton from "../../components/loading/LoadingButton";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(
    "http://bootdey.com/img/Content/avatar/avatar1.png"
  );

  const [show, setShow] = useState(false);
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const [isSpinnerLoading, setIsSpinnerLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleImageUpload = async (e) => {
    const uploadData = new FormData();
    uploadData.append("imgUrl", e.target.files[0]);
    setIsBtnLoading(true);

    try {
      const res = await uploadService.single(uploadData);
      setImageUrl(res.data.fileUrl);
    } catch (err) {
      console.log("Error while uploading the file: ", err);
    } finally {
      setIsBtnLoading(false);
      handleCloseProfileModal();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleShowProfileModal = () => {
    setShow(true);
  };

  const handleCloseProfileModal = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, image: imageUrl };
    setIsSpinnerLoading(true);
    try {
      await userService.update(user._id, payload);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSpinnerLoading(false);
    }
  };

  const setFormUserData = (data) => {
    setFormData({
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
    });

    if (data.image) {
      setImageUrl(data.image);
    }
  };

  const getCurrentUser = async () => {
    setIsSpinnerLoading(true);
    try {
      const res = await userService.getUser(user._id);
      const data = res.data.user;
      setFormUserData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSpinnerLoading(false);
    }
  };
  

  useEffect(() => {
    getCurrentUser();
  }, []);

  return !isSpinnerLoading ? (
    <div className="row profile-container">
      <div className="col-xl-4">
        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">
            <img
              className="img-account-profile rounded-circle mb-2"
              src={imageUrl}
              alt=""
            />

            <div className="small font-italic text-muted mb-4">
              JPG or PNG no larger than 5 MB
            </div>

            {isBtnLoading ? (
              <LoadingButton />
            ) : (
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleShowProfileModal}
              >
                Upload new image
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        <div className="card mb-4">
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <Form onSubmit={handleSubmit}>
              <label className="small mb-1" htmlFor="username">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
                value={formData.username}
              />

              <div className="row gx-3 mb-3 mt-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="form-control"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onChange={handleChange}
                    value={formData.firstName}
                  />
                </div>

                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="form-control"
                    id="lastName"
                    type="text"
                    placeholder="Lastname"
                    name="lastName"
                    onChange={handleChange}
                    value={formData.lastName}
                  />
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
                <div className="col-md-6">
                  <label className="small mb-1" htmlFor="inputPhone">
                    Phone number
                  </label>
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </div>
              <button className="btn btn-primary" type="submit">
                Save changes
              </button>
            </Form>
          </div>
        </div>
      </div>

      <ProfileLocationModal
        handleClose={handleCloseProfileModal}
        handleFileUpload={handleImageUpload}
        show={show}
      />
    </div>
  ) : (
    <LoadingSpinner />
  );
}

export default ProfilePage;
