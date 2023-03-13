import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Components/Admin';
import Index from './Components';
import Register from './Components/Register';
import All_doctors from './Components/Doctors/All_doctors';
import Add_doctor from './Components/Doctors/Add_doctor';
import Appointment from './Components/Appointment/Appointment';
import View_Appointment from './Components/Appointment/View_Appointment';
import Add_patient from './Components/Patients/Add_patient';
import All_patient from './Components/Patients/All_patient';


function App() {
  return (
   <>
  <Routes>
     <Route path='/' element={(window.localStorage.getItem('id') === null) ? <Login /> : <Index/>} />
        <Route path='/Admin' element={(window.localStorage.getItem('id') !== null) ? <Index /> : <Login />} />
        {/* <Route path="/" element={ <Login/>} />
        <Route path="/Admin" element={ <Index/>} /> */}
        <Route path="/Register" element={ (window.localStorage.getItem('id') !== null) ? <Login /> :<Register/>} />
        <Route path="/All_doctors" element={(window.localStorage.getItem('id') === null) ? <Login /> : <All_doctors/>} />
        <Route path="/Add_doctor" element={(window.localStorage.getItem('id') === null) ? <Login /> : <Add_doctor/>} />
        <Route path="/Appointment" element={ (window.localStorage.getItem('id') === null) ? <Login /> :<Appointment/>} />
        <Route path="/View_Appointment" element={(window.localStorage.getItem('id') === null) ? <Login /> : <View_Appointment/>} />
        <Route path="/Add_patient" element={(window.localStorage.getItem('id') === null) ? <Login /> : <Add_patient/>} />
        <Route path="/All_patient" element={(window.localStorage.getItem('id') === null) ? <Login /> : <All_patient/>} />




    
 
    </Routes>
   </>
  );
}

export default App;
