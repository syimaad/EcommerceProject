import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import userservice from "../services/user.service";
import Modal from "react-bootstrap/Modal";
const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setName] = useState("");
  const [emailId, setEmail] = useState("");

  const [password, setPass] = useState("");
  
  const [ph_no, setPhone] = useState("");
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const addDealer = (e) => {
    e.preventDefault();

    const user = { username, emailId, password, roles, id };


    if(id){
      userservice.update(user).then((response)=>{

      }).catch(error =>{
          console.log(error);
      })
  }else{
      userservice.addDealer(user).then((response)=>{
          console.log(response.data);navigate("/Dealerlogin")
         }).catch(error=>{
          console.log(error)
         })
        }
  }
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
        .getUserId(id)
        .then((user) => {
          setName(user.data.username);
          setEmail(user.data.emailId);
          setPass(user.data.password);
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
          <form
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
                Enter your UserName
              </label>
              <input
                type="text"
                placeholder="UserName"
                class="form-control"
                value={username}
                onChange={(e) => setName(e.target.value)}
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
                placeholder="password"
                class="form-control"
                value={password}
                onChange={(e) => setPass(e.target.value)}
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
                Enter your Email
              </label>
              <input
                type="text"
                placeholder="Enter Your Email"
                class="form-control"
                value={emailId}
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
                Enter Role (Farmer/Dealer)
              </label><br></br>
                <select name="role" id="role" >
                <option value="farmer">Farmer</option>
                <option value="dealer">Dealer</option>
              </select>
            </div>
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
                <Button variant="primary" onClick={(o) => addDealer(o)}>
                  <Link to="/Dealerlogin" style={{color:"white"}}>Save </Link>
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
