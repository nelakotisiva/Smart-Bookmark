import { useState } from "react";
import { addBookmark } from "../services/bookmarkService";
import { useNavigate } from "react-router-dom";

function AddBookmark(){

  const [title,setTitle]=useState("");
  const [url,setUrl]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addBookmark({title,url});
    navigate("/");
  };

  return(
    <div className="container mt-4">
      <h3>Add Bookmark</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input className="form-control mb-3" placeholder="Title"
          value={title} onChange={(e)=>setTitle(e.target.value)} required />

        <input className="form-control mb-3" placeholder="URL"
          value={url} onChange={(e)=>setUrl(e.target.value)} required />

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default AddBookmark;
