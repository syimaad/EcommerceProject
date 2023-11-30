import httpClient from "../http-common1";
let jwt = localStorage.getItem("jwt");

const auth = (data) => {
  const p = httpClient.post("api/auth/signin", data);
  return p;
};
const SIGNUP_BASE_REST_API_URL = "http://localhost:8091/api/auth/signup";
const getUser = (username) => {
  return httpClient.get(`api/auth/signup`,
   {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }
  );
};
const logout = () => {
  localStorage.removeItem(jwt);
};

// const getAdmin = (username) => {
//   return httpClient.get(`api/auth/signin/${username}`, {
//     headers: {
//       Authorization: `Bearer ${jwt}`,
//     }
//   });
//};

export default { auth, getUser,logout };