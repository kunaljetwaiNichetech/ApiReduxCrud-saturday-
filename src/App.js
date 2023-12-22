
import './App.css';
// import {  BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import  {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Form from './components/Form/Form';
import AllMain from './components/AllMain/AllMain';
import AdddData from './components/apicalling/delete';
import { Deletedata } from './components/apicalling/Adding';


function App() {
  
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<AllMain/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/Add' element={<Form/>}/>

      </Routes>
     </Router>
      {/* <AdddData/> */}
      
     {/* <Disp/> */}
     
    </div>
  );
}

export default App;
