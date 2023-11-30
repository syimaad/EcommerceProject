import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cropservice from "../services/cropservice";
let p = localStorage.getItem("jwt");
const Croplist = () => {
  const [train, setTrains] = useState([]);
  const booking = (p) => {
    if (!p) {
      window.alert("Please login before you want to buy crops!");
      window.location.href = "/Dealerlogin";
    } else {
      window.location.href = "/payment";
    }
  };
  const init = () => {
    cropservice
      .getAllCrop()
      .then((response) => {
        console.log("Printing crop data", response.data);
        setTrains(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="tam">
      
      <h3
        style={{
          color: "black",
          fontWeight: "bolder",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        List of Crops
      </h3>
      <hr />
      <div>
        <table className="table table-bordered table-transparent table-striped" style={{width:"78rem", textAlign: "center", fontWeight:"bold",fontSize:"17px", marginLeft:"3rem"}}>
          <thead className="thead-dark">
            <tr>
              <th>crop_id</th>
              <th>type</th>
              <th>name</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            
            {train.map((Crop) => (
              <tr key={Crop.id}>
                <td>{Crop.id}</td>
                <td>{Crop.type}</td>
                <td>{Crop.name}</td>
                <td>{Crop.price}</td>
                <td>
                  <button className="btn btn-success ml-2" onClick={()=>booking(p)}>
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <>

      <Link to="/">
          <button className="bckc">Back </button>
        </Link>
      </>
    </div>
  );
};

export default Croplist;