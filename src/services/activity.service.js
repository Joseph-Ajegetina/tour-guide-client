import axios from "axios";

class ActivitiesService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/activities
  createActivity = (requestBody) => {
    return this.api.post("/api/activities", requestBody);
  };

  // GET /api/activities
  getAllActivities = () => {
    return this.api.get("/api/activities");
  };

  // GET /api/activities/:id
  getActivity = (id) => {
    return this.api.get(`/api/activities/${id}`);
  };

  // PUT /api/activities/:id
  updateActivity = (id, requestBody) => {
    return this.api.put(`/api/activities/${id}`, requestBody);
  };

  // DELETE /api/activities/:id
  deleteActivity = (id) => {
    return this.api.delete(`/api/activities/${id}`);
  };

  getLocationActivity = (id) => {
    return this.api.get(`/api/activities/location/${id}`);
  };
}

// Create one instance (object) of the service
const activitiesService = new ActivitiesService();

export default activitiesService;
