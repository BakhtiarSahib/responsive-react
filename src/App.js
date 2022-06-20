import './App.css';
import Home from "./components/Home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Booking from "./components/Booking/Booking/Booking";
import Login from "./components/Login/Login/Login";
import Header from "./components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
          <BrowserRouter>
              <Header/>
              <Routes>
                  <Route path="/" element={<Home />}>
                      <Route index element={<Home />} />
                  </Route>
                  <Route path="/home" element={<Home />}/>
                  <Route path="/login" element={<Login />}/>
                  <Route path="/*" element={<PrivateRoute/>}>
                      <Route path='booking/:serviceId' element={<Booking />}/>
                  </Route>
                 {/* <Route path="/booking/:serviceId" element={<Booking/>}/>*/}
                  <Route path="*" element={<NotFound />}/>
              </Routes>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
