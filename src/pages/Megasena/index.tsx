import { useLoteria } from "../../hooks";
import "./index.css";
import trevo from "../../assets/trevo-megasena.png";

export default function Megasena() {
  const { megasena } = useLoteria();
  return (
    megasena.dataApuracao ?
    <div className="principal-bloco">
    <div className="mega-bloco-principal">
      <div>
        <div className="mega-bloco-loteria">
          <img src={trevo} alt="Megasena" />
          <span className="mega-nome-loteria">MEGA-SENA</span>
        </div>
        <div className="mega-bloco-estimativa">
          <div className="mega-texto-estimativa">
            Estimativa de prêmio do próximo concurso. Sorteio em{" "}
            {megasena.dataApuracao}
          </div>
          <div className="mega-valor-estimativa">{megasena.valorEstimadoProximoConcurso.toLocaleString("pt-br",{
            style:"currency",
            currency:"brl"
          })}</div>
        </div>
      </div>
      <div className="mega-bloco-direita">
        <div className="mega-linha-bola">
            {
                megasena.dezenas.map(
                    dezena => <div className="mega-bola" key={dezena}>{dezena}</div>
                )
            }
        </div>
        <div className="mega-texto-acumulou">
            {
                megasena.acumulado ? "ACUMULOU!" : "NÃO ACUMULOU"
            }
        </div>
        <div className="mega-data-concurso">
            {
                `Concurso ${megasena.numeroDoConcurso} - ${megasena.dataPorExtenso}`
            }
        </div>
      </div>
    </div>
    </div>
    :
    <div>Carregando</div>

  );
}
