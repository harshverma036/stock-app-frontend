import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchClient from "./pages/SearchClient";
import ViewData from "./pages/ViewData";
import ImportData from "./pages/ImportData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchClient />} />
        <Route path="/view/:client_id" element={<ViewData />} />
        <Route path="/import" element={<ImportData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
