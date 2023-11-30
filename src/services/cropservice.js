//import httpClient from "../http-common";


// const getAll = () => {
//   return httpClient.get("/ListCrop");
// };

// const get = (id) => {
//   return httpClient.get("/ListCrop/${id}");
// };

// const addCrop = (data) => {
//   return httpClient.post("/addCrop", data);
// };

// const update = (data) => {
//   return httpClient.put("/updateCrop/${id}", data);
// };

// const remove = (id) => {
//   return httpClient.delete('/deleteCrop/${id}', id);
// };

import axios from 'axios'

const CROP_BASE_REST_API_URL = 'http://localhost:8080/crop/ListCrop';
const ADD_BASE_REST_API_URL = "http://localhost:8080/crop/addCrop";
const UPDATE_BASE_REST_API_URL = "http://localhost:8080/crop/updateCrop";
const DELETE_BASE_REST_API_URL = "http://localhost:8080/crop/deleteCrop";


class cropservice{
    getAllCrop(){
        return axios.get(CROP_BASE_REST_API_URL)
    }

    addCrop(crop){
        return axios.post(ADD_BASE_REST_API_URL,crop)
    }

    getCropById(cropId) {
        return axios.get(CROP_BASE_REST_API_URL + '/' + cropId);
    }

    updateCrop(cropId, crop) {
        return axios.put(UPDATE_BASE_REST_API_URL + '/' + cropId, crop);
    }

    deleteCrop(cropId) {
        return axios.delete(DELETE_BASE_REST_API_URL + '/' + cropId);
    }

}
export default new cropservice();


//export default { getAll, addCrop, get, update, remove };