import './App.css';
// import Home from './component/Home';
import Navbar from './component/Navbar';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import MainHome from './component/MainHome';
import Register from './component/Register';
import AfterLogin from './component/AfterLogin';
import NewLogin from './component/NewLogin';


function App() {
  return (
    <div className="App">
     
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/login' element={<Home/>}></Route>
        <Route exact path='/' element={<MainHome/>}></Route>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login/in' element={<AfterLogin/>}/>
        <Route exact path='/newlogin' element={<NewLogin/>}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
