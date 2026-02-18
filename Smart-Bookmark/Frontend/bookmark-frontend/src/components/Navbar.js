import { Link } from "react-router-dom";

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand fw-bold" to="/">
        🔖 Smart Bookmark
      </Link>

      <div className="ms-auto">
        <Link className="btn btn-light fw-semibold" to="/add">
          + Add Bookmark
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
