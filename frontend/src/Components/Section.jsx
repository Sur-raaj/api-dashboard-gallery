import Animal from "./blogs/Animal"
import Vehicles from "./blogs/Vehicles"
import Countries from "./blogs/Countries"
import Home from "./blogs/Home"
import {Route, Routes} from 'react-router-dom'

export default function Section(){
    return(
        <>
            <section>
            
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Animal' element={<Animal/>}/>
                    <Route path='/Vehicles' element={<Vehicles/>}/>
                    <Route path='/Countries' element={<Countries/>}/>
                </Routes>
            </section>
        </>
    )
}