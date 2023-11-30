import httpClient from "../http-common1";
let jwt = localStorage.getItem("jwt");
const create = (data) => {
  return httpClient.post("api/auth/signup", data);
};

const getAll = () => {
  return (httpClient.get("/security/user/g", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
    );
};
const getUserId = (id) => {
  return httpClient.get(`/security/user/ga/${id}`);
};

const getByEmailId = (emailId) => {
  return httpClient.get(`/user/getbyEmailid/${emailId}`);
};

const getByUserNamee = (username) => {
  return httpClient.get(`security/user/getbyusername/${username}`);
};
const createBooking = (data) => {
  return httpClient.post("/security/user/b/i", data);
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

const createTicketDetails = (data) => {
  return httpClient.post("/security/admin/p/ticket", data);
};


const authenticate = (data) => {
  return httpClient.post("/security/authenticate", data);
};
const update = (data) => {
  return (httpClient.put("/security/user/updateUserDetails", data, {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
  );
};
const getBookingByemail=(emailId)=>{
  return (httpClient.get(`security/user/getAllBookingbyemailId/${emailId}`,{
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
);

}
export default {
  create,
  getAll,
  getUserId,
  getByEmailId,
  getByUserNamee,
  createBooking,
  createCropDetails,
  createTicketDetails,
  authenticate,
  getBookingByemail,
  update
};