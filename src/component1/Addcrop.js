// import React from "react";
// import { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import userservice from "../services/user.service";
// import cropservice from "../services/cropservice";
// import AuthService from "../services/auth-service";
// // import "bootstrap/dist/css/bootstrap.min.css";
// let p = localStorage.getItem("username");
// export const Addcrop = () => {

//   //const [crop_no, setCropNo] = useState([]);
//   const [type, setCropType] = useState("");
//   const [name, setCropName] = useState("");
//   const [price, setCropPrice] = useState("");

//   const navigate = useNavigate();
//   const { id } = useParams();

 

//   const addCrop = (e) => {
//     e.preventDefault();

//     const crop = {
//       id,
//       type,
//       name,
//       price
      
    
//     };


//     if(id){
//       cropservice.updateCrop(id, crop).then((response) => {
//         navigate("/croplist1");

//       }).catch(error => {
//         console.log(error);
//       })

//   }else{
//       cropservice.addCrop(crop).then((response)=>{
//           console.log(response.data);navigate("/croplist1")
//          }).catch(error=>{
//           console.log(error)
//          })
//         }
//   }
//   //   if (id) {
//   //     //update
//   //     cropservice
//   //       .update(crop)
//   //       .then((response) => {
//   //         console.log("Crop details updated successfully", response.data);

//   //         navigate("/croplist1");
//   //       })

//   //       .catch((error) => {
//   //         console.log("Something went wrong", error);
//   //       });
//   //   } else {
//   //     // create
//   //     cropservice
//   //       .createCropDetails(crop)
//   //       .then((response) => {
//   //         console.log("Crop details added successfully", response.data);
//   //         navigate("/croplist1");
//   //       })
//   //       .catch((error) => {
//   //         console.log("Something went wrong", error);
//   //       });
//   //   }
//   // };

//   useEffect(() => {
    
//       cropservice
//         .get(id)
//         .then((response) => {
//           setCropType(response.data.type);
//           setCropName(response.data.name);
//           setCropPrice(response.data.price);
//         })
//         .catch((error) => {
//           console.log("Something went wrong", error);
//         });
    
//   }, []);
//   function SubmitBtn() {
//     if (
//       type &&
//       name &&
//       price
//     )
//       return (
//         <button onClick={(o) => addCrop(o)} className="btn btn-success">
//           Save
//         </button>
//       );
//     else
//       return (
//         <button className="btn btn-success" disabled>
//           Save
//         </button>
//       );
//   }
//   return (
//     <div className="container"><br></br>
//       <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "40px" , textAlign:"center"}}>
//         Add Crop Details
//       </h3>
//       <hr />
//       <form>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control col-4 is-invalid"
//             id="type"
//             value={type}
//             onChange={(e) => setCropType(e.target.value)}
//             placeholder="Enter Crop Type"
            
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control col-4 is-invalid"
//             id="name"
//             value={name}
//             onChange={(e) => setCropName(e.target.value)}
//             placeholder="Enter Crop Name"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control col-4 is-invalid"
//             id="price"
//             value={price}
//             onChange={(e) => setCropPrice(e.target.value)}
//             placeholder="Enter Crop Price"
//             required
//           />
//         </div>

//         <div><br></br>
//           {/* { <button onClick={(e) => addCrop(e)} className="btn btn-primary">
//             Save
//           </button> } */}
//           <SubmitBtn />
//         </div>
//       </form>
//       <hr />
//       <Link to="/adminprofile">
//           <button className="bckc">Back </button>
//         </Link>
//     </div>
//   );
// };

// export default Addcrop;





import React, {useState, useEffect} from 'react'
import  {useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CropService from '../services/cropservice'


const Addcrop = () => {

  const [type, settype] = useState('')
  const [name, setname] = useState('')
  const [price, setprice] = useState('')
  const [farmerid, setfarmerid] = useState('')
  
  const navigate = useNavigate();
  const {id} = useParams();

  const addCrop = (e) => {
    e.preventDefault();

    const crop = {type, name, price, farmerid}

    if(id){
            CropService.updateCrop(id, crop).then((response) => {
              navigate("/croplist1");
      
            }).catch(error => {
              console.log(error);
            })
      
        }else{
            CropService.addCrop(crop).then((response)=>{
                console.log(response.data);navigate("/croplist1")
               }).catch(error=>{
                console.log(error)
               })
              }
        }

  useEffect(() => {
    CropService.getCropById(id).then((response) => {
      settype(response.data.type)
      setname(response.data.name)
      setprice(response.data.price)
      setfarmerid(response.data.farmerid)

    }).catch(error => {
      console.log(error)
    })
   
  }, [])
  
  function SubmitBtn() {
        if (
          type &&
          name &&
          price &&
          farmerid
        )
          return (
            <button onClick={(o) => addCrop(o)} className="btn btn-success">
              Save
            </button>
          );
        else
          return (
            <button className="btn btn-success" disabled>
              Save
            </button>
          );
      }


  const title = () => {
    if(id) {
      return <h2 className = "text-center"> Update Crop</h2>
    }else{
      return <h2 className = "text-center"> Add Crop</h2>

    }
  }

  return (
    <div>
      <br></br>
      <div className = "container">
        <div className = "row">
          <div className = "card col-md-6 offset-md-3 offset-md-3">
            {
              title()
            }
              <div className="card-body">
                <form>
                  <div className = "form-group mb-2">
                    <label className = "form-label">Crop Type :</label>
                    <input
                      type = "text"
                      className = "form-control"
                      name = "type"
                      value = {type}
                      onChange = {(e) => settype(e.target.value)}
                      placeholder = "Enter crop type"
                  >
                  </input>
                </div>
                <div className = "form-group mb-2">
                <label className = "form-label">Crop Name :</label>
                  <input
                      type = "text"
                      className = "form-control"
                      name = "name"
                      value = {name}
                      onChange = {(e) => setname(e.target.value)}
                      placeholder = "Enter crop name"
                  >
                  </input>
                </div>
                
                <div className = "form-group mb-2">
                <label className = "form-label">Crop Price :</label>
                  <input
                      type = "number"
                      className = "form-control"
                      name = "price"
                      value = {price}
                      onChange = {(e) => setprice(e.target.value)}
                      placeholder = "Enter crop price"
                  >
                  </input>
                </div>
                <div className = "form-group mb-2">
                <label className = "form-label">Crop Farmer Id :</label>
                  <input
                      type = "text"
                      className = "form-control"
                      name = "farmerid"
                      value = {farmerid}
                      onChange = {(e) => setfarmerid(e.target.value)}
                      placeholder = "Enter crop farmer id"
                  >
                  </input>
                </div>

                <div><br></br>

           
           <SubmitBtn />
         </div>
                <Link to = "/Croplist1" className = "btn btn-danger"> Cancel </Link>

              </form>
              </div>
              </div>
              </div>
            </div>
          </div>
        
  )
}
 
export default Addcrop