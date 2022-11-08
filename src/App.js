import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import Header from "./component/header/Header";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path={"/"} element={<Main />}/>
            <Route path={"/signup"} element={<SignUp />}/>
            <Route path={"/login"} element={<Login />}/>
        </Routes>
    </>
  );
}

export default App;
