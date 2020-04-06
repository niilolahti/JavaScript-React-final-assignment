import React from 'react';
import Content from '../Content/Content';
import Button from '../buttons';

import './Settings.css';

function Settings(props) {

    const handleSubmit = function(event) {
      event.preventDefault();
      let polttoainetyyppi = event.target.elements.polttoainetyyppi.value;
      props.onFormSubmit(polttoainetyyppi);
      event.target.elements.polttoainetyyppi.value = "";
    }

    return (
      <Content>
        <div className="settings">
         <h2>Asetukset</h2>
         <h3>Polttoainetyypit</h3>
         <div className="settings__items">
          { props.selectList.map(item => <div key={item}>{item}</div>)}
          <form onSubmit={handleSubmit}>
            <div className="settingsForm">
              <input type="text" name="polttoainetyyppi" />
              <Button type="submit" primary>LISÄÄ</Button>
            </div>
          </form>
         </div>
        </div>
      </Content>
    );
}

export default Settings;