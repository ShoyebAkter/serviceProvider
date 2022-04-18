import './App.css';
import About from "./Pages/About/About"
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Notfound from './Pages/NotFound/Notfound';
import Login from './Pages/Login/Login/Login';
import Services from './Pages/Home/Services/Services';
import Feedback from 'react-bootstrap/esm/Feedback';
import Trainers from './Pages/Home/Trainers/Trainers';
import SignUp from './Pages/Login/SignUp/SignUp';

function App() {
  return (
    <div className='container bg-light'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services'element={<Services></Services>}></Route>
        <Route path='/feedback'element={<Trainers></Trainers>}></Route>
        <Route path='/service/:serviceID' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
