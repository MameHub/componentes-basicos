import AMayusculas from "./component/AMayusculas.js";
import AcortaIndividual from "./component/AcortaIndividual.js";
import AcortaIndividualGlobal from "./component/AcortaIndividualGlobal.js";
import CambioColor from "./component/CambioColor.js";
import ClickMayusculas from "./component/ClickMayusculas.js";
import ClickMayusculasMinusculas from "./component/ClickMayusculasMinusculas.js";

export default function Home() {
  return (
    <div className="components">

      <div className="component">
        <p>Componente 1: ClickMayusculas</p>
        <ClickMayusculas/>
      </div>

      <div className="component">
        <p>Componente 2: ClickMayusculasMinusculas</p>
        <ClickMayusculasMinusculas/>
      </div>

      <div className="component">
        <p>Componente 3: AMayusculas</p>
        <AMayusculas/>
      </div>

      <div className="component">
        <p>Componente 4: CambioColor</p>
        <CambioColor/>
      </div>

      <div className="component">
        <p>Componente 5: AcortaIndividual</p>
        <AcortaIndividual/>
      </div>
      
      <div className="component">
        <p>Componente 6: AcortaIndividualGlobal</p>
        <AcortaIndividualGlobal/>
      </div>

    </div>
  );
}
