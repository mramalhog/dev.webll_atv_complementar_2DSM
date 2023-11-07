import { Link } from "react-router-dom";
import "./index.css";
import { useLoteria } from "../../hooks";

export default function Menu(){
    const {ativo,setAtivo} = useLoteria();
    return(
        <div>
            <Link to="/megasena" className={ativo === "megasena" ? "botao ativo" : "botao megasena"} onClick={() => setAtivo("megasena")}>
                MEGASENA
            </Link>
            <Link to="/quina" className={ativo === "quina" ? "botao ativo" : "botao quina"} onClick={() => setAtivo("quina")}>
                QUINA
            </Link>
            <Link to="/lotofacil" className={ativo === "lotofacil" ? "botao ativo" : "botao lotofacil"} onClick={() => setAtivo("lotofacil")}>
                LOTOFÁCIL
            </Link>
        </div>
    )
}