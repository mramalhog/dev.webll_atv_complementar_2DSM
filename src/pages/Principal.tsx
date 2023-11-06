import Lotofacil from "./Lotofacil";
import Megasena from "../pages/Megasena";
import Quina from "../pages/Quina";
import { useLoteria } from "../hooks";
import "./index.css";

export default function Principal(){
    const {megasena} = useLoteria();
    return(
        <div>
            {
                megasena.dataApuracao ?
                <div className="principal-bloco">
                    <Megasena/>
                    <Lotofacil/>
                    <Quina/>
                </div>
                :
                <div>Carregando</div>
            }
        </div>
    )
}