import Home from "./Pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
