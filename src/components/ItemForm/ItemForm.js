import React from 'react';
import { withRouter } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import Button from '../buttons';

import './ItemForm.css';

class ItemForm extends React.Component {

  constructor(props) {
    super(props);
    const data = props.data ? props.data : {
      litrat: 0,
      summa: 0,
      litrahinta: 0,
      ajetutkm: 0,
      ostopaiva: "",
      tyyppi: "95 E10"
    }
    this.state = {
      data: data
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    });
  }
  
  handleCancel(event) {
    event.preventDefault();
    this.props.history.goBack();
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = Object.assign({}, this.state.data);
    data.litrat = parseFloat(data.litrat);
    data.summa = parseFloat(data.summa);
    data.litrahinta = parseFloat(data.litrahinta);
    data.ajetutkm = parseFloat(data.ajetutkm);
    data.id = data.id ? data.id : uuidv4();
    this.props.onFormSubmit(data);
    this.props.history.push("/");
  }

  handleDeleteItem(event) {
    event.preventDefault();
    this.props.onDeleteItem(this.state.data.id);
    this.props.history.push("/");
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>

        <div className="itemform">

          <div className="itemform__row">
            <div>
              <label htmlFor="litrat">Litrat</label>
              <input type="number" name="litrat" step="0.01" value={this.state.data.litrat} onChange={this.handleInputChange} />
            </div>
            <div>
              <label htmlFor="summa">Hinta (€)</label>
              <input type="number" name="summa" step="0.01" value={this.state.data.summa} onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <label htmlFor="litrahinta">Litrahinta (€/l)</label>
              <input type="number" name="litrahinta" size="10" step="0.01" value={this.state.data.litrahinta} onChange={this.handleInputChange} />
            </div>
            <div>
              <label htmlFor="ajetutkm">Matkamittarin lukema (km)</label>
              <input type="number" name="ajetutkm" size="10" value={this.state.data.ajetutkm} onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <label htmlFor="ostopaiva">Ostopäivä</label>
              <input type="date" name="ostopaiva" value={this.state.data.ostopaiva} onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <label htmlFor="name">Polttoainetyyppi</label>
              <select name="tyyppi" value={this.state.data.tyyppi} onChange={this.handleInputChange}>
              
                {this.props.selectList.map(item => <option value={item} key={item}>{item}</option>)}
              
              </select>
            </div>
          </div>

          <div className="itemform__row">
            <div>
              <Button onClick={this.handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button type="submit" primary>{this.state.data.id ? "TALLENNA" : "LISÄÄ"}</Button>
            </div>
          </div>

          { this.props.onDeleteItem ? 
            <div className="itemform__row">
              <div>
                <Button onClick={this.handleDeleteItem}>POISTA</Button> 
              </div>
              <div></div>
                </div> : "" }

        </div>

      </form>

    );
  }
}

export default withRouter(ItemForm);