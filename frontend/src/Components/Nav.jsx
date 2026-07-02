import { Router,Link} from "react-router-dom"

export default function Nav(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/animal">Animal</Link></li>
                    <li><Link to="/vehicles">Vehicles</Link></li>
                    <li><Link to="/countries">Countries</Link></li>
                </ul>
            </nav>
        </>
    )
}