import { useState,useEffect } from "react"



export default function Countries(){

    const [country_data, setCountry] = useState([])

    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/countries/',{
        method:"GET"
      })
      .then((res)=> res.json())
      .then(data=> {
         setCountry(data)
        console.log(data)})
      }
    , [])
    
    
    return(
        <>
                <article style={{padding:"12px"}}>
                <h1>Countries page</h1>
                {country_data.map((element)=>
                    <div key={element.id}>
                        <h2>{element.name}</h2>
                     
                        <img src={element.flags} style={{width:"300px",heigh:"auto"}}></img>
                      
                        <p>{element.description}</p>
                    </div>
                )}
            </article>
        </>
    )
}