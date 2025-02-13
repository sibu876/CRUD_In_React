import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Edit() {
     
    const [title,setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [des, setDes] = useState("");

    const navigate = useNavigate();

    useEffect(() =>{
        const editdata =  localStorage.getItem('editdata');
        const savedataall = JSON.parse(localStorage.getItem('storeddata'));
        
        if(savedataall && savedataall[editdata]){
            const datavalue = savedataall[editdata]
            setTitle(datavalue.title);
            setSubtitle(datavalue.subtitle);
            setDes(datavalue.des);
        }
      
    },[])

    const handltitle = (e) =>{
        setTitle(e.target.value);
    }
    const handlesubtitle = (e) =>{
        setSubtitle(e.target.value);
    }
    const handledes = (e) =>{
        setDes(e.target.value);
    }
    const handlesaveedit =() =>{
      const editdata =  localStorage.getItem('editdata');
      const savedataall = JSON.parse(localStorage.getItem('storeddata'));

       savedataall[editdata] = {title,subtitle,des};
    //   editvalue.title = title;
    //   editvalue.subtitle = subtitle;
    //   editvalue.des = des;
        console.log(savedataall);
        localStorage.setItem('storeddata',JSON.stringify(savedataall));
      
        navigate('/');
    }

  return ( 
    <div>
        <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
           <input type="text" className="form-control" id="exampleFormControlInput1"   placeholder="Enter some Title"  value={title} onChange={handltitle}/>
        </div>
        <div className="mb-3">
           <label htmlFor="exampleFormControlInput1" className="form-label">SubTitle</label>
           <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter subTitle here" onChange={handlesubtitle} value={subtitle}/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handledes} value={des}></textarea>
        </div>
        <button type="button" className="btn btn-primary"  onClick={handlesaveedit}>Edit</button>
      </div>
     )
   }

export default Edit
