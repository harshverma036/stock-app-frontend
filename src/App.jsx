import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchClient from "./pages/SearchClient";
import ViewData from "./pages/ViewData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchClient />} />
        <Route path="/view/:client_id" element={<ViewData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
