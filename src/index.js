import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap//
import "./styles/index.css";
import "./styles/Navbar.css";
import "./styles/Story.css";
import "./styles/Card.css";
import "./styles/Reels.css";
import "./styles/Suggestion.css";
import "./styles/Newsfeed.css";
import "antd/dist/antd.min.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
