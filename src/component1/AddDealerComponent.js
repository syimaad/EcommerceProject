import React, { useEffect, useState } from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import DealerService from '../services/DealerService'
export const AddDealerComponent = () => {
  const [name,setName] = useState('')
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [address,setAddress] = useState('')
  const{id} = useParams();
  const navigate = useNavigate();
  const saveorUpdateDealer = (e)=> {
    e.preventDefault();

    const dealer = {name, username,password, email, phone, address}
  
    if(id){
        DealerService.updateDealer(id,dealer).then((response)=>{
            navigate("/listdealer");
        }).catch(error =>{
            console.log(error);
        })
    }else{
        DealerService.addDealer(dealer).then((response)=>{
            console.log(response.data)
            navigate("/Dealerlogin");
           }).catch(error=>{
            console.log(error)
           })
          }
    }

  

  useEffect(()=>{
    DealerService.getDealerById(id).then((response)=>{
        setName(response.data.name)
        setUsername(response.data.username)
        setPassword(response.data.password)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setAddress(response.data.address)
    }).catch(error => {
        console.log(error)
    })
    },[])

    const title = () =>{
        if(id){
            return <h2 className="text-center">Update Dealer</h2>
        }
        else{
                return <h2 className="text-center">Dealer Registration</h2>
        }
        
    }
    return (
    <div>
        <br/>
        <br/>
        <br/>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                   {
                    title()
                   }

                    <div className="card-body">
                    <form>
                    <div className = "form-group mb-2">
                        <label className = "form-label">Name : </label>
                    <input 
                    type = "text"
                    placeholder = "Enter Name"
                    name = "Name"
                    className="form-control"
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className = "form-group mb-2">
                        <label className = "form-label">Username : </label>
                    <input 
                    type = "text"
                    placeholder = "Enter UserName"
                    name = "UserName"
                    className="form-control"
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                    ></input>
                </div>
                <div className = "form-group mb-2">
                        <label className = "form-label">Password : </label>
                    <input 
                    type = "text"
                    placeholder = "Enter Password"
                    name = "Password"
                    className="form-control"
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div className = "form-group mb-2">
                        <label className = "form-label">Email : </label>
                    <input 
                    type = "email"
                    placeholder = "Enter Email"
                    name = "Email"
                    className="form-control"
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className = "form-group mb-2">
                        <label className = "form-label">Phone : </label>
                    <input 
                    type = "number"
                    placeholder = "Enter Phone No."
                    name = "Phone"
                    className="form-control"
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    ></input>
                </div>
                <div className = "form-group mb-2">
                        <label className = "form-label">Address : </label>
                    <input 
                    type = "text"
                    placeholder = "Enter Address"
                    name = "Address"
                    className="form-control"
                    value = {address}
                    onChange = {(e) => setAddress(e.target.value)}
                    ></input>
                </div>
                <button className="btn btn-success" onClick = {(e)=> saveorUpdateDealer(e)}>Add</button>
                <Link to="/DL" className="btn btn-danger">Cancel</Link>
            </form>
                </div>

                </div>
                
            </div>
            </div>
            </div>
  )
}
export default AddDealerComponent