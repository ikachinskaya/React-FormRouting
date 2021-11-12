import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/MainPage/mainPage";
import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
