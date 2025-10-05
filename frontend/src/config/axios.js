import axios from 'axios';

// ✅ Directly use your Render backend (no mode detection)
axios.defaults.baseURL = 'https://coursebackend-3.onrender.com';
axios.defaults.withCredentials = true;

export default axios;
