import React from 'react';
import moment from 'moment';

import ArrowRight from '@material-ui/icons/ArrowRight';
import { Link } from 'react-router-dom';

import './Kulukortti.css';

function Kulukortti(props) {

  let ostopaiva = moment(props.data.ostopaiva);
    /* Ks. Moment.js-video 
    TÄMÄ KOKONAISUUS TEKEE PÄIVÄMÄÄRÄVÄLISTÄ OIKEAN NÄKÖISEN JA TARVITAAN AJANJAKSON KESKIARVOLASKENTAAN
    let kausi = "";
    let keskiarvo;
    if (props.data.kaudenalku && props.data.kaudenloppu) {
    let kaudenalku = moment(props.data.kaudenalku);
    let kaudenloppu = moment(props.data.kaudenloppu);
    let kausi = kaudenalku.format("D.M.Y") + " - " + kaudenloppu.format("D.M.Y");
    let paivat = kaudenloppu.diff(kaudenalku, 'days');
    keskiarvo = props.data.summa / paivat * 30;
   } */ 

  return(
    <div className="kulukortti">
      <div className="kulukortti__ryhma">
        <div className="kulukortti__rivi">
          <div className="kulukortti__litrat">{props.data.litrat.toFixed(2)} l</div>
          <div className="kulukortti__summa">{props.data.summa.toFixed(2)} €</div>
        </div>
        <div className="kulukortti__rivi">
          <div className="kulukortti__litrahinta">{props.data.litrahinta.toFixed(2)} € / l</div>
          <div className="kulukortti__ajetutkm">{props.data.ajetutkm} km</div>
        </div>
        <div className="kulukortti__rivi">
          <div className="kulukortti__ostopaiva">{ostopaiva.format("D.M.Y")}</div>
          <div className="kulukortti__tyyppi">{props.data.tyyppi}</div>
        </div>
      </div>
      <div className="kulukortti__linkki">
        <Link to={"/edit/" + props.data.id}><ArrowRight /></Link>
      </div>
    </div>
  );
}

export default Kulukortti;