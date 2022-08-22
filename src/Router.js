import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logout from "./Components/Logout/Logout";
import Navbar from "./Components/Navbar/Navbar";
import Newsfeed from "./Components/NewsFeed/Newsfeed";
import Reels from "./Components/Reels/Reels";




function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Instagram" exact element={<><Newsfeed /></>} />
          <Route path="/login" element={<></>} />
          <Route path="/signup" element={<>SignUp</>} />

          <Route path="/reels" element={<><Reels /></>} />
          <Route path="/logout" element={<><Logout /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
