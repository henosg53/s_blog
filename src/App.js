import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Nav from './components/nav';
import Index from './pages';
import Login from './pages/login';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      {/* <Nav/> */}
      <Routes>
        <Route path='/home/*' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
