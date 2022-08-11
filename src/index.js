import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap//
import "./styles/Navbar.css"
import "antd/dist/antd.min.css";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
