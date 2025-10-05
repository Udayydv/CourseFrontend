import axios from 'axios';

// ✅ Correct backend link (Render)
const baseURL = import.meta.env.MODE === 'production'
  ? 'https://coursebackend-3.onrender.com'  // your backend
  : 'http://localhost:5000';

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true; // allow cookies/auth headers if needed

export default axios;
