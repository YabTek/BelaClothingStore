import './bootstrap.min.css';
// import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
// import LoginPage from './screens/login/login';
// import SignupPage from './screens/signup/signup';
// import MypurchasePage from './screens/my purchase/Mypurchase';
// import HomePage from './screens/Home/HomePage';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
// import UserList from './screens/admin/userList'

function App() {
  return (
     <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<LandingPage/>}/>
      {/* <Route path = "/home" element= {<HomePage/>}/>
      <Route path = "/login" element= {<LoginPage/>}/>
      <Route path = "/signup" element= {<SignupPage/>}/>
      <Route path = "/mypurchase" element= {<MypurchasePage/>}/>
      <Route path = "/admin" element= {<UserList/>}/> */}

    </Routes>
    </BrowserRouter>
    {/* <Footer/>  */}
    </>
  );
}

export default App;
