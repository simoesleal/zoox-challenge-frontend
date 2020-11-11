import axios from "axios";
//const BASE_URL = process.env.VUE_APP_BASE_URL;

class HttpConnection {
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:9000/api/v1",
      headers: {
        "Content-Type": "application/json",
        "X-API-DST": "ZOOX-CHALLENGE",
      },
      withCredentials: false,
    });
  }

  get connection() {
    return this.instance;
  }
}

export default new HttpConnection();
