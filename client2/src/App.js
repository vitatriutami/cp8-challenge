import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Search />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
    </>
  );
}

export default App;
