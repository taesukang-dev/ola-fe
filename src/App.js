import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/Login/Login";
import Headers from "./component/header/Headers";
import Write from "./pages/write/Write";
import Detail from "./pages/detail/Deatil";
import TeamWrite from "./pages/write/TeamWrite";

function App() {
  return (
    <>
        <Headers />
        <Routes>
            <Route path={"/"} element={<Main />}/>
            <Route path={"/signup"} element={<SignUp />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/write"} element={<Write />} />
            <Route path={"/team/write"} element={<TeamWrite />} />
            <Route path={"/detail/:id"} element={<Detail />} />
        </Routes>
    </>
  );
}

export default App;
