import React from 'react';

import LocalGasStation from '@material-ui/icons/LocalGasStation';

import './Header.css';

function Header(props) {
    return(
      <div className="header">
        <LocalGasStation htmlColor="#fff" />
        <h1>Tankkauslogi</h1>
      </div>
    );
}

export default Header;