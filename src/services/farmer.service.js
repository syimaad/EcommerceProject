import httpClient from "../http-common1";
import axios from 'axios'
let jwt = localStorage.getItem("jwt");

//const SIGNUP_BASE_REST_API_URL = "http://localhost:8091/api/auth/signup";
const create = (data) => {
  return httpClient.post("api/auth/signin", data);
};

const addFarmer=(user)=>{
  return httpClient.post("api/auth/signup", user);
}

const getAll = () => {
  return (httpClient.get("/ListFarmer", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
    );
};
const getUserId = (id) => {
  return httpClient.get(`/ListFarmer/${id}`);
};


const createCropDetails = (data) => {
  return (
    httpClient.post("/crop/addCrop", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  );
};

const authenticate = (data) => {
  return httpClient.post("/security/authenticate", data);
};
const update = (id) => {
  return (httpClient.put("/updateFarmer/${id}", {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  );
};



export default {
  create,
  addFarmer,
  getAll,
  getUserId,
  createCropDetails,
  authenticate,
  update
};