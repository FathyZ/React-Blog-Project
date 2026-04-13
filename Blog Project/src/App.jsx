import { BrowserRouter } from "react-router";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
