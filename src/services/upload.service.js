import axios from "axios";

class UploadService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.VITE_API_URL || "http://localhost:5005",
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
  single = (requestBody) => {
    return this.api.post("/api/upload/single", requestBody);
  };

  // GET /api/locations
  multiple = (requestBody) => {
    return this.api.post("/api/upload/multiple", requestBody);
  };


}
// Create one instance (object) of the service
const uploadService = new UploadService();

export default uploadService;