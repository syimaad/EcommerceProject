import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userservice from "../services/farmer.service";
import Modal from "react-bootstrap/Modal";
const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUsername] = useState("");
  //const [address, setAddress] = useState("");
  //const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  //const [username, setUsername] = useState("");
  const [roles, setRoles] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();



  var [name,setName]=useState()
    
  const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
      setName(event.target.value)
  }

  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
      const postURL = "http://localhost:8091/api/auth/signup" //Our previously set up route in the backend
      fetch(postURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // We should keep the fields consistent for managing this data later
              username: username,
              email: email,
              password: password,
              roles:roles
              
          })
      })
      .then(()=>{
          // Once posted, the user will be notified 
          alert('You have been added to the system!');
      })
  }























  // const addFarmer = (e) => {
  //   e.preventDefault();

  //   const user = { username, email, password, roles, id };


  //   if(id){
  //     userservice.update(user).then((response)=>{

  //     }).catch(error =>{
  //         console.log(error);
  //     })
  // }else{
  //     userservice.addFarmer(user).then((response)=>{
  //         console.log(response.data);navigate("/Farmerlogin")
  //        }).catch(error=>{
  //         console.log(error)
  //        })
  //       }
  // }
  //   if (id) {
  //     //update
  //     userservice
  //       .update(user)
  //       .then((response) => {
  //         console.log("user data updated successfully", response.data);
  //         navigate("/profile");
  //       })
  //       .catch((error) => {
  //         console.log("Something went wrong", error);
  //       });
  //   } else {
  //     // create
  //     userservice
  //       .create(user)
  //       .then((response) => {
  //         console.log("user added successfully", response.data);
  //         navigate("/");
  //       })
  //       .catch((error) => {
  //         console.log("Something went wrong", error);
  //       });
  //   }
  // };

  useEffect(() => {
    if (id) {
      userservice
        .getId(id)
        .then((user) => {
          setUsername(user.data.username);
          // setName(user.data.address);
          // setName(user.data.phone);
          setEmail(user.data.email);
          setPassword(user.data.password);
          setRoles(user.data.roles);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <section>
      <div><br></br>
        <h2><center> Please create an account!</center></h2>
        <div class="container d-flex justify-content-center">
          <form onSubmit={handleSubmit}
            className="form-control"
            style={{
              width: "55rem",
              height: "35rem",
              marginTop: "1rem",
              marginRight: "15rem",
              backgroundColor: "powderblue",
              boxShadow: "1px 2px 9px #F4AAB9",
              paddingTop:"1px"
            }}
          >
            <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                class="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Address
              </label>
              <input
                type="text"
                placeholder="Enter Your Address"
                class="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Phone no
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone"
                class="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div> */}
            <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                class="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Password
              </label>
              <input
                type="password"
                placeholder="Enter Your password"
                class="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter your Roles
              </label>
              <input
                type="text"
                placeholder="Enter Your username"
                class="form-control"
                value={roles}
                onChange={(e) => setRoles(e.target.value)}
              />
            </div>            

            

            {/* <div class="form-group pt-2 pl-1">
              <label
                for="exampleInputName"
                style={{
                  fontSize: "20px",
                  color: "black",
                  marginLeft: "10px",
                  fontWeight: "bolder",
                }}
              >
                Enter Role (Farmer/Dealer)
              </label><br></br>
                <select name="role" id="role" >
                <option value="farmer">Fr</option>
                <option value="dealer">Dealer</option>
              </select>
            </div> */}
            <Button
              variant="primary"
              onClick={handleShow}
              style={{
                marginTop: "1rem",
                fontFamily: "serif",
                paddingTop: "5px",
                width: "19rem",
                alignItems: "center",
                marginLeft: "250px",
                fontSize: "17px",
              }}
            >
              Create Account
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Do you want to register?</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                If yes, Click on Save 
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <button type="submit"> Submit</button>
                {/* <Button variant="primary" onClick={(user) => addFarmer(user)}>
                  <Link to="/Farmerlogin" style={{color:"white"}}>Save </Link>
                /</Button> */}
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
