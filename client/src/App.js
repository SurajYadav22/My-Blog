import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/accounts/Login";
import DataProvider from "./context/DataProvider";
import Home from "./home/Home";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: "65px" }}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
