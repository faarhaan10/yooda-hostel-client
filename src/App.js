import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
