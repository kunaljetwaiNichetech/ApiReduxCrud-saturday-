
import './App.css';
// import {  BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import  {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Form from './components/Form/Form';
import AllMain from './components/AllMain/AllMain';
import AdddData from './components/apicalling/delete';
import { Deletedata } from './components/apicalling/Adding';
import Disp from './components/Display/Disp';
import { useEffect } from 'react';
import { Loader } from './components/Loader/LOaderr';


function App() {
  // useEffect(()=>{
  //   // fetch("https://crudapi.co.uk/api/v1/kunal",{
  //   // method:"GET",
  //   // headers:{ 'Content-Type': 'application/json',
  //   // 'Authorization': 'https://crudapi.co.uk/api/v1/kunal'}
  //   // })
  //   // .then((res)=>res.json()).then((res)=>console.log("this is appjs conmsole",res))
    // fetch("https://crudapi.co.uk/api/v1/kunal", {
    //   method:"GET",
    //   // headers :{'Authorization':'4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw'}})
    //   headers :{Authorization: 'Bearer 4SUIx3DCqQZIEQdFbwU72xZJmB78cfb8R0OQ0a7XfTKIdUDGYw'}})
    //     .then(response => response.json())
    //     .then(data => console.log(data.items));
  // })
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<AllMain/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/Add' element={<Form/>}/>
        <Route path='/display' element={<Disp/>}/>
        <Route path='/da' element={<Loader/>}/>


      </Routes>
     </Router>
      {/* <AdddData/> */}
  
      
     {/* <Disp/> */}
     
    </div>
  );
}

export default App;
//9574020099
