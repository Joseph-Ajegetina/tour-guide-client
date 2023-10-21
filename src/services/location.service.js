import axios from "axios";

class LocationsService {
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

  // POST /api/locations
  createLocation = (requestBody) => {
    return this.api.post("/api/locations/create", requestBody);
  };

  // GET /api/locations
  getAllLocations = () => {
    return this.api.get("/api/locations");
  };

  // GET /api/locations/:id
  getLocation = (id) => {
    return this.api.get(`/api/locations/${id}`);
  };

  // PUT /api/locations/:id
  updateLocation = (id, requestBody) => {
    return this.api.put(`/api/locations/${id}`, requestBody);
  };

  // DELETE /api/locations/:id
  deleteLocation = (id) => {
    return this.api.delete(`/api/locations/${id}`);
  };
}

// Create one instance (object) of the service
const locationsService = new LocationsService();

export default locationsService;
