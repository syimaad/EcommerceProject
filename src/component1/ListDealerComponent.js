import React, {useEffect, useState} from 'react'
import DealerService from '../services/DealerService'
import { Link } from 'react-router-dom'
import {Delete,Done,Save} from "@mui/icons-material";
import {Button,Stack, IconButton} from "@mui/material";
const ListDealerComponent = () => {
    const[dealer, setDealer] = useState([])
    useEffect(() => {
       getAllDealer();
    }, [])

    const getAllDealer =() =>{
        DealerService.getAllDealer().then((response)=> {
            setDealer(response.data)
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteDealer=(dealerId)=>{
        DealerService.deleteDealer(dealerId).then((response)=>{
            getAllDealer();
        }).catch(error=>{
            console.log(error);
        })
    }
  return (
    <div className="container">
        <h2 className = "text-center">ListDealerComponent</h2>
        {/* <Link to = "/add-dealer" className = "btn btn-primary mb-2"style={{marginTop:"30px"}}> Add Dealer </Link>  */}
        <table className = "table table-bordered table-striped">
<thead>
    <th> Dealer Id</th>
    <th>Dealer Name</th>
    <th>Dealer Username</th>
    <th>Dealer Email</th>
    <th>Dealer Phone</th>
    <th>Dealer Address</th>
    <th>Actions</th>
</thead>
<tbody>
    {
        dealer.map(
            dealer => 
            <tr key = {dealer.id}>
                <td>{dealer.id}</td>
                <td>{dealer.name}</td>
                <td>{dealer.username}</td>
                <td>{dealer.email}</td>
                <td>{dealer.phone}</td>
                <td>{dealer.address}</td>
                <td>
                    <Link className="btn btn-info" to={`/edit-dealer/${dealer.id}`}>Update</Link>
                        <Button variant="contained" color="error" onClick={() => deleteDealer(dealer.id)} style={{marginLeft:"10px"}} endIcon={<Delete />}></Button>
                    
                </td>
            </tr>
        )
    }
</tbody>
        </table>
    </div>
  )
}
export default ListDealerComponent;