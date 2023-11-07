import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";

export default function Menu(){
    const {ativo,setAtivo} = useLoteria();
    return(
        <div>
            <Link to="/megasena" className={ativo === "megasena" ? "ativo" : "megasena"} onClick={() => setAtivo("megasena")}>
                Megasena
            </Link>
            <Link to="/quina" className={ativo === "quina" ? "ativo" : "quina"} onClick={() => setAtivo("quina")}>
                Quina
            </Link>
            <Link to="/lotofacil" className={ativo === "lotofacil" ? "ativo" : "lotofacil"} onClick={() => setAtivo("lotofacil")}>
                Lotofácil
            </Link>
        </div>
    )
}