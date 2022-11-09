import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/main/Main";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/Login/Login";
import Headers from "./component/header/Headers";
import Write from "./pages/write/Write";
import Detail from "./pages/detail/Deatil";
import TeamWrite from "./pages/write/TeamWrite";
import TeamDetail from "./pages/detail/TeamDetail";

function App() {
  return (
    <>
        <Headers />
        <Routes>
            <Route path={"/"} element={<Main />}/>
            <Route path={"/signup"} element={<SignUp />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/write"} element={<Write />} />
            <Route path={"/write/team"} element={<TeamWrite />} />
            <Route path={"/detail/:id"} element={<Detail />} />
            <Route path={"/detail/team/:id"} element={<TeamDetail />} />
        </Routes>
    </>
  );
}

export default App;
