import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Farmerlogin from "./components/Farmerlogin";
import FarmerSignUp from "./components/FarmerSignUp";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Croplist from "./component1/Croplist";
import Farmerlist from "./component1/FarmerList";
import Bookinglist from "./component1/Bookinglist";
import Addbooking from "./component1/Addbooking";
import DProfile from "./components/DProfile";
import FProfile from "./components/FProfile";
import Dealerlogin from "./components/Dealerlogin";
import ListDealerComponent from './component1/ListDealerComponent';
import AddDealerComponent from './component1/AddDealerComponent';
import CropDetails from "./component1/CropDetails";
import Croplist1 from "./component1/Croplist1";
import Addcrop from "./component1/Addcrop";
import Fullticket from "./component1/Fullticket";
import Adminprofile from "./components/Adminprofile";
import Adminlogin from "./components/Adminlogin";
import Bookingbyemail from "./component1/Bookingbyemail";
import SignUp1 from "./components/SignUp1";
import { Logout } from "./components/Logout";
import DL from "./components/DL";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Land-Page Home, About */}
        <Route path="/" element={<Showcase />} />
        <Route path="/d" element={<Destinations />} />
        <Route path="/Farmersignup" element={<FarmerSignUp />} />
        <Route path="/Farmerlogin" element={<Farmerlogin />} />
        <Route path="/Dealerlogin" element={<Dealerlogin />} />
        <Route path="/Croplist" element={<Croplist />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Farmer" element={<Farmerlist />} />
        <Route path="/Booking" element={<Bookinglist />} />
        <Route path="/Addbooking" element={<Addbooking />} />
        <Route path="/fullticket" element={<Fullticket />} />
        <Route path="/booking/edit/:id" element={<Addbooking />} />
        <Route path="/Dprofile" element={<DProfile />} />
        <Route path="/Fprofile" element={<FProfile />} />
        <Route path="/CropDetails" element={<CropDetails />} />
        <Route path="/Addcrop" element={<Addcrop />} />
        <Route path="/adminprofile" element={<Adminprofile />} />
        <Route path="/croplist1" element={<Croplist1 />} />
        <Route path="/croplist/edit/:id" element={<Addcrop />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/bookingbyemail" element={<Bookingbyemail />} />
        <Route path="/user/edit/:id" element={<SignUp1/>} />
        <Route path="*" element={<Error />} />
        <Route path = "/edit-Crop/:id" element = {<Addcrop/>} />
        <Route path="/listdealer" element={<ListDealerComponent />} />
        <Route path="/add-dealer" element={<AddDealerComponent />} />
        <Route path="/edit-dealer/:id" element={<AddDealerComponent />} />
        <Route path="/DL" element={<DL />} />
       

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
