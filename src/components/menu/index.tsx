import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <Link to="/megasena">
                Megasena
            </Link>
            <Link to="/quina">
                Quina
            </Link>
            <Link to="/lotofacil">
                Lotofácil
            </Link>
        </div>
    )
}