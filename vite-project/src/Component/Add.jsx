import  { useState,React } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
    const [title,setTitle] = useState("");
    const [des,setDes] = useState("");
    const [subtitle,setSubtitle] = useState("");

    const navigate = useNavigate();
     
    const handletittle = (e) => {
            setTitle(e.target.value);
    }
    const handlesubtitle =(e) => {
        setSubtitle(e.target.value);
    }
    const handledes = (e) => {
        setDes(e.target.value);
    }
    const savedata = () => {
        const existingdata = localStorage.getItem("storeddata"); 
        if(!existingdata){
           localStorage.setItem("storeddata",JSON.stringify([{title,subtitle,des}])); 
            navigate('/');
        }
        else{
            const parsedata = JSON.parse(existingdata);
            localStorage.setItem("storeddata",JSON.stringify([...parsedata,{title,subtitle,des}]));
            navigate('/');
        }
    }
    

  return (
    <div>
      <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter some Title" value={title} onChange={handletittle}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">SubTitle</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter subTitle here" value={subtitle} onChange={handlesubtitle}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={des} onChange={handledes}></textarea>
</div>
<button onClick={savedata} type="button" className="btn btn-primary" >Add</button>
    </div>
  )
}

export default Add
