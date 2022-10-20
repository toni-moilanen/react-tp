import React from "react";
import "./styles.css";
import data from "./mockupdata";
import { useState } from "react";
//import Lounaanosat from "./components/Lounaanosat";

const Aterianosat = ({ osat }) => {
  return (
    <div>
      {osat.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
};

const Ateria = ({ ateriantiedot }) => {
  const [numero, setNumero] = useState(0);

  const funktio = () => {
    //Toteuta palvelimelle tiedon lähetys...

    setNumero(numero + 1);
  };

  return (
    <div className="Ateria">
      <div>Tyyppi:{ateriantiedot.Name}</div>
      <div>Hinta:{ateriantiedot.Price}</div>
      <div onClick={funktio}>Tykätty: {numero}</div>
      <Aterianosat osat={ateriantiedot.Components} />
    </div>
  );
};

const PaivanAteriat = ({ paivantiedot }) => {
  return (
    <div className="paivanateriat">
      <div>Päivämäärä:{paivantiedot.Date}</div>
      <div>Ravintolan aukioloaika:{paivantiedot.LunchTime}</div>
      {paivantiedot.SetMenus.map((o, i) => (
        <Ateria ateriantiedot={o} key={i} />
      ))}
    </div>
  );
};

//console.log(data.MenusForDays[0].SetMenus);

const App = () => {
  return (
    <div className="App">
      <PaivanAteriat paivantiedot={data.MenusForDays[0]} />
    </div>
  );
};

export default App;
