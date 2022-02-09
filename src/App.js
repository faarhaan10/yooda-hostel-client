import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
