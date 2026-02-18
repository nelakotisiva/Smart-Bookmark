import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ViewBookmarks from "./pages/ViewBookmarks";
import AddBookmark from "./pages/AddBookmark";
import EditBookmark from "./pages/EditBookmark";

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ViewBookmarks/>}/>
        <Route path="/add" element={<AddBookmark/>}/>
        <Route path="/edit/:id" element={<EditBookmark/>}/>
      </Routes>
    </Router>
  );
}

export default App;
