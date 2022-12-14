import './bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './components/Landing/Landing';
import LoginPage from './screens/login/login';
import SignupPage from './screens/signup/signup';
import MypurchasePage from './screens/my purchase/Mypurchase';
import HomePage from './screens/Home/HomePage';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

function App() {
  return (
     <>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<Landing/>}/>
      <Route path = "/home" element= {<HomePage/>}/>
      <Route path = "/login" element= {<LoginPage/>}/>
      <Route path = "/signup" element= {<SignupPage/>}/>
      <Route path = "/mypurchase" element= {<MypurchasePage/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/> 
    </>
  );
}

export default App;
