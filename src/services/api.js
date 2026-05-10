import axios from "axios";

const api = axios.create({

  baseURL: "https://service-hub5.onrender.com",

});

export default api;