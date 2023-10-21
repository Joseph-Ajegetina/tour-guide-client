import axios from 'axios';

class UserService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5005'

    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getUser = id => {
    return this.api.get(`/api/user/${id}`);
  };

  update = (id, requestBody) => {
    return this.api.put(`/api/user/${id}`, requestBody);
  };


}

// Create one instance object
const userService = new UserService();

export default userService;
