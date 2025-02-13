import {React,useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const [fetchdata,setFetchdata] = useState(null);
 

  useEffect(() => {
     const fetchdata = JSON.parse(localStorage.getItem("storeddata"));
     setFetchdata(fetchdata);
  },[])
 
    const addnavigate = () =>{
        navigate('/add')
    }
    const editnavigate = (index) =>{
        localStorage.setItem('editdata',index);
        navigate('/edit')
    }
    const handledelete = (index) =>{
        const filterdata = fetchdata.filter((card,i) => i != index )
        setFetchdata(filterdata);
        localStorage.setItem('storeddata',JSON.stringify(filterdata));

    }
    
  return (
    <>
        <button type="button" className="btn btn-primary" onClick={addnavigate}>Add</button> <br />
        { fetchdata && fetchdata.map((card,index) => (
            <div className="card" style={{"width": "18rem"}} key={index}>
                 <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{card.subtitle}</h6>
                      <p className="card-text">{card.des}</p>
                  </div>
                <div className="card-body"> 
                    <a href="#" className="card-link" onClick={() => handledelete(index)}>Delete</a>
                    <a href="#" className="card-link" onClick={() => editnavigate(index)}>Edit</a>
                </div>
            </div>
        ))}
    </>
  )
}

export default Home
