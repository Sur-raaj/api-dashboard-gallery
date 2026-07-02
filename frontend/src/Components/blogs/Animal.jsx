import { useState, useEffect } from "react"



export default function Animal() {

    const [animal_data, setAnimal] = useState([])

    useEffect(() => {
        fetch('54.211.188.243:5000/api/animals/', {
            method: "GET"
        })
            .then((res) => res.json())
            .then(data => {
                setAnimal(data)
                console.log(data)
            })
    }
        , [])


    return (
        <>
            <article style={{ padding: "12px" }}>
                <h1>Animal page</h1>
                {animal_data.map((element) =>
                    <div key={element.id}>
                        <h2>{element.name}</h2>
                        <img src={element.photo} style={{ width: "300px", heigh: "auto" }}></img>
                        <p>{element.description}</p>
                    </div>
                )}
            </article>
        </>
    )
}