import React from "react";
import { useEffect, useState } from "react";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import cropservice from "../services/cropservice";
import { Link } from "react-router-dom";

// const Croplist1 = () => {
//   const [crop, setCrops] = useState([]);

//   const init = () => {
//     cropservice
//       .getAll()
//       .then((response) => {
//         console.log("Printing crop data", response.data);
//         setCrops(response.data);
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//       });
//   };
//   const handleDelete = (id) => {
//     console.log("Printing id", id);
//     cropservice
//       .remove(id)
//       .then((response) => {
//         console.log("Crop details has been Deleted", response.data);
//         init();
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//       });
//   };

//   useEffect(() => {
//     init();
//   }, []);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <section className="tam">
//       <div >
//         <div className="container">
//           {}
//           <br></br>

//           <div>
//             <table className="table table-bordered table-transparent table-striped" style={{width:"70rem",fontSize:"17px", textAlign: "center", fontWeight:"bold"}}>
//               <thead className="thead-light">
//                 <tr>
//                   <th>Crop No</th>
//                   <th> Crop Type</th>
//                   <th> Crop Name</th>
//                   <th> Crop Price</th>
//                   <th> Actions </th>
//                 </tr>
//               </thead>
//               <tbody>
//               {crop.map((Crop) => (
//                   <tr key={Crop.id}>
//                     <td>{Crop.id}</td>
//                     <td>{Crop.type}</td>
//                     <td>{Crop.name}</td>
//                     <td>{Crop.price}</td>
//                     <td>
//                       <Link
//                         className="btn btn-warning"
//                         to={`/updateCrop/${Crop.id}`}
//                       >
//                         Update
//                       </Link>

//                       <button
//                         className="btn btn-danger ml-2"
//                         onClick={() => {
//                           handleDelete(Crop.id);
//                         }}>Delete
//                       </button>

//                       {/* <Modal show={show} onHide={handleClose}>
//                         <Modal.Header closeButton>
//                           <Modal.Title>Want to Delete?</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>If yes , Click on Delete</Modal.Body>
//                         <Modal.Footer>
//                           <Button variant="secondary" onClick={handleClose}>
//                             Close
//                           </Button>
//                           <Button
//                             variant="danger"
//                             onClick={() => {
//                               handleDelete(crops.id);
//                             }}
//                           >
//                             <Link
//                               to="/Adminprofile"
//                               style={{ color: "white", textDecoration: "none" }}
//                             >
//                               Delete
//                             </Link>
//                           </Button>
//                         </Modal.Footer>
//                       </Modal> */}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//         <Link to="/adminprofile">
//           <button className="bckc">Back </button>
//         </Link>
//       </div>
//     </section>
//   );
// };

const Croplist1 = () => {
  const [crop, setCrop] = useState([])

  useEffect(() => {
      getAllCrop();

  }, [])

  const getAllCrop =() =>{
      cropservice.getAllCrop().then((response) => {
          setCrop(response.data)
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })

  }

  const deleteCrop = (cropId) => {
      cropservice.deleteCrop(cropId).then((response) => {
          getAllCrop();

      }).catch(error => {
          console.log(error);
              })
  }

return (
  <div className = "container">
      <h2 className = "text-center"> ListCropComponent</h2>
      <Link to = "/Addcrop" className = "btn btn-primary mb-2"> Add Crops </Link>
      <Link to = "/FProfile" className = "btn btn-primary mb-2"> Back </Link>
      <table className = "table table-bordered table-striped">
          <thead>
              <th>Crop Id</th>

              <th>Crop Name</th>

              <th>Crop Type</th>

              <th>Crop Price</th>

              <th>Crop Farmer_Id</th>

              <th>Actions</th>

          </thead>
          <tbody>
              {
                  crop.map(
                      crop =>
                      <tr key = {crop.id}>
                          <td> {crop.id} </td>
                          <td> {crop.name} </td>
                          <td> {crop.type} </td>
                          <td> {crop.price} </td>
                          <td> {crop.farmer_id} </td>
                          <td>
                              <Link className = "btn btn-info" to = {`/edit-Crop/${crop.id}`}> Update </Link>
                              <button className = "btn btn-danger" onClick={() => deleteCrop(crop.id) }style = {{marginLeft:"20px"}}> Delete </button>
                          </td>
                          

                      </tr>

                  )
              }
          </tbody>
      </table>
  </div>
)
}


export default Croplist1;