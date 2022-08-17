import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Newsfeed from "./Components/NewsFeed/Newsfeed";
import Reels from "./Components/Reels/Reels";




function Router() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<></>} />
          <Route path="/signup" element={<>SignUp</>} />
          <Route path="/newsfeed" element={<><Newsfeed /></>} />
          <Route path="/reels" element={<><Reels /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
