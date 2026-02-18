import { useEffect, useState } from "react";
import { getAllBookmarks, deleteBookmark } from "../services/bookmarkService";
import { Link } from "react-router-dom";

function ViewBookmarks(){

  const [bookmarks,setBookmarks]=useState([]);

  const loadData=async()=>{
    const res=await getAllBookmarks();
    setBookmarks(res.data);
  };

  useEffect(()=>{
    loadData();
  },[]);

  const handleDelete=async(id)=>{
    await deleteBookmark(id);
    loadData();
  };

  return(
   <div className="container mt-5">

  <h2 className="page-title">Saved Bookmarks</h2>

  <div className="table-responsive shadow">
    <table className="table table-hover text-center align-middle">
      <thead className="table-primary">
        <tr>
          <th>Title</th>
          <th>Visit</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {bookmarks.map(b=>(
          <tr key={b.id}>
            <td className="fw-semibold">{b.title}</td>

            <td>
              <a className="btn btn-outline-primary btn-sm open-link"
                 href={b.url}
                 target="_blank"
                 rel="noreferrer">
                Open
              </a>
            </td>

            <td>
              <Link className="btn btn-warning btn-sm me-2"
                to={`/edit/${b.id}`}>
                Edit
              </Link>

              <button className="btn btn-danger btn-sm"
                onClick={()=>handleDelete(b.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

</div>

  );
}

export default ViewBookmarks;
