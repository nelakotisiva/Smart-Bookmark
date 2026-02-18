import { useEffect, useState } from "react";
import { updateBookmark, getAllBookmarks } from "../services/bookmarkService";
import { useNavigate, useParams } from "react-router-dom";

function EditBookmark(){

  const {id}=useParams();
  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [url,setUrl]=useState("");

  useEffect(()=>{
    getAllBookmarks().then(res=>{
      const b=res.data.find(item=>item.id===parseInt(id));
      if(b){
        setTitle(b.title);
        setUrl(b.url);
      }
    });
  },[id]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await updateBookmark(id,{title,url});
    navigate("/");
  };

  return(
    <div className="container mt-4">
      <h3>Edit Bookmark</h3>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>
        <input className="form-control mb-3" value={title}
          onChange={(e)=>setTitle(e.target.value)} required />

        <input className="form-control mb-3" value={url}
          onChange={(e)=>setUrl(e.target.value)} required />

        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditBookmark;
