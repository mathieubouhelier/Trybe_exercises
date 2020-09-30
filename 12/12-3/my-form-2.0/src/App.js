import React, { Component } from 'react';
import estados from './estados';
import './App.css';
import DisplaySubmited from './components/DisplaySubmited'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      CPF: '',
      endereço: '',
      cidade: '',
      Apartamento: '',
      Casa: '',
      ResumoDoCurrículo: '',
      Cargo: '',
      flagEnter: 'showAlert',
      DescriçãoDoCargo: '',
      DisplayFlag: 'block'
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    let valueModified = value;
    name === 'email'
      ? (valueModified = value.toUpperCase())
      : (valueModified = value);
    name === 'endereço'
      ? (valueModified = value.replace(/[^\w\s]/gi, ''))
      : (valueModified = value);
    name === 'cidade'
      ? (valueModified = value.replace(/^[0-9]/, ''))
      : (valueModified = value);

    this.setState(state => ({
      [name]: valueModified,
      // selectedOption: event.target.value,
    }));
  };

  onMouseEnter() {
    this.state.flagEnter === 'showAlert'
      ? alert('Preencha com cuidado esta informação.')
      : console.log('NO');
    this.setState({ flagEnter: 'Alert Done' });
  }

  onClick = e => { 

    this.setState(state => ({
    DisplayFlag: 'none' 
    }))
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Name:
              <input
                type="text"
                name="name"
                maxLength="40"
                required
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                maxLength="50"
                required
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label>
              CPF:
              <input
                type="number"
                name="CPF"
                value={this.state.CPF}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Endereço:
              <input
                type="text"
                name="endereço"
                maxLength="200"
                required
                value={this.state.endereço}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Cidade:
              <input
                type="text"
                name="cidade"
                maxLength="28"
                required
                onBlur={this.onBlur}
                placeholder="Sua Cidade"
                value={this.state.cidade}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Estado:
              <select
                name="estado"
                required
                value={this.state.estado}
                onChange={this.handleChange}
              >
                {estados.map(estado => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </select>
            </label>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="Apartamento"
                  value="Apartamento"
                  // checked={this.onValueChange === 'Apartamento'}
                  onChange={this.onValueChange}
                />
                Apartamento
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="Casa"
                  value="Casa"
                  // checked={this.onValueChange === 'Casa'}
                  onChange={this.onValueChange}
                />
                Casa
              </label>
            </div>
          </fieldset>
          <fieldset>
            <label>
              Resumo do currículo:
              <input
                type="textarea"
                name="ResumoDoCurrículo"
                maxLength="1000"
                required
                value={this.state.ResumoDoCurrículo}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Cargo:
              <input
                type="text"
                name="Cargo"
                maxLength="40"
                required
                value={this.state.Cargo}
                onChange={this.handleChange}
                onMouseEnter={() => this.onMouseEnter()}
              />
            </label>
            <label>
              Descrição do cargo:
              <input
                type="text"
                name="DescriçãoDoCargo"
                maxLength="500"
                required
                value={this.state.DescriçãoDoCargo}
                onChange={this.handleChange}
              />
            </label>
          </fieldset>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <button onClick = {this.onClick} > click</button>
          <div style={{ display: this.state.DisplayFlag }}>
          <DisplaySubmited/>
                <p>{this.state.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
