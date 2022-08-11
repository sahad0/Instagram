import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar/Navbar";



function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<></>} />
          <Route path="/signup" element={<>SignUp</>} />
          <Route path="/newsfeed" element={<>Newsfeed</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
