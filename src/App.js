import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
import axios from "axios";

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
  return (
    <div className="Ateria">
      <div>Tyyppi:{ateriantiedot.Name}</div>
      <div>Hinta:{ateriantiedot.Price}</div>
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

const App = () => {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/restaurants')
      .then(res => {
        console.log(res)
        setMenu(res.data[0])
        setLoading(false)
      })
    }, [])

  return (
    <div className="App">
      {loading ? <p>loading...</p> : <PaivanAteriat paivantiedot={menu.MenusForDays[0]} />}
    </div>
  );
};

export default App;
