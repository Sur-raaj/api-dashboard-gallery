import { useState,useEffect } from "react"



export default function Vehicles(){

    const [vehicle_data, setVehicle] = useState([])

    useEffect(() => {
      fetch('54.211.188.243:5000/api/vehicles/',{
        method:"GET"
      })
      .then((res)=> res.json())
      .then(data=> {
        setVehicle(data)
        console.log(data)})
      }
    , [])
    
    
    return(
        <>
              <article style={{padding:"12px"}}>
                <h1>Vehicles page</h1>
                {vehicle_data.map((element)=>
                    <div key={element.id}>
                        <h2>{element.name}</h2>
                        <img src={element.photo} style={{width:"300px",heigh:"auto"}}></img>
                        <p>{element.description}</p>
                    </div>
                )}
            </article>
        </>
    )
}