import { createContext, useEffect, useState } from "react";
import loteria from "../services/Loteria";
import resultado from "../services/resultado";
import { LoteriaProps, Props } from "../types";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({children}:any) {
  const[megasena,setMegasena] = useState({} as Props);
  const[lotofacil,setLotofacil] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);

  useEffect(() => {
    (async function () {
      //const r = await loteria.get();
      const r:LoteriaProps = resultado;
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
      setQuina(r.quina);
      console.log( r );
    })();
  }, []);

  return (
    <Contexto.Provider value={{ megasena, lotofacil,quina }}>
        {children}
    </Contexto.Provider>
  );
}

