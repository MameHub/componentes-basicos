import AMayusculas from "./component/AMayusculas";
import ClickMayusculas from "./component/ClickMayusculas";
import ClickMayusculasMinusculas from "./component/ClickMayusculasMinusculas";

export default function Home() {
  return (
    <div className="components">

      <div className="component">
        <ClickMayusculas/>
      </div>

      <div className="component">
        <ClickMayusculasMinusculas/>
      </div>

      <div className="component">
        <AMayusculas/>
      </div>

    </div>
  );
}
