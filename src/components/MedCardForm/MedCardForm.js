import React, { Component } from "react";

class MedCardForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          medName: "",
          stock: 0,
          dose: 0,
          unit: 0, 
      };
  
      this.handleChangeMedName = this.handleChangeMedName.bind(this);
      this.handleChangeStock = this.handleChangeStock.bind(this);
      this.handleChangeDose = this.handleChangeDose.bind(this);
      this.handleChangeUnit = this.handleChangeUnit.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeMedName(e) {
      this.setState({ medName: e.currentTarget.value });
    }

    handleChangeStock(e) {
        this.setState({ stock: e.currentTarget.value });
    }

    handleChangeDose(e) {
        this.setState({ dose: e.currentTarget.value });
    }

    handleChangeUnit(e) {
        this.setState({ unit: e.currentTarget.value });
      }
  
    handleSubmit(e) {
      e.preventDefault();
    //   this.props.submitMed(this.state);
    }
  
    render() {
        let {medName, stock, unit, dose} = this.state;
  
      return (
        <form onSubmit={ this.handleSubmit }>
          <div style={styles.container}>
            <div style={styles.column}>
                <label style={styles.text}>Medication Type</label>
                <select 
                    style={styles.select}
                    onChange={this.handleChangeMedName}
                >
                    <option>Choose from ...</option>
                    <option selected={ medName === "Paracetomol" ? "selected" : ""}
                    value="Paracetomol">Paracetomol</option>
                    <option value="Ibuprofen">Ibuprofen</option>
                    <option value="Warfarin">Warfarin</option>
                    <option value="Asperin">Asperin</option>
                    <option value="Codeine">Codeine</option>
                    <option value="Amoxicillin">Amoxicillin</option>
                    <option value="Diazepan">Diazepan</option>
                    <option value="Zopiclone">Zopiclone</option>
                    <option value="Nitrofurantoin">Nitrofurantoin</option>
                    <option value="Pravastatin">Pravastatin</option>
                </select>
            </div>
            
            <div style={styles.column}>
                <label style={styles.text}>Stock</label>
                <input
                style={styles.input}
                onChange={ this.handleChangeStock }
                type="number"
                />
            </div>

            <div style={styles.column}>
                <label style={styles.text}>Dosage per day</label>
                <input
                style={styles.input}
                onChange={ this.handleChangeDose }
                type="number"
                />
            </div>

            <div style={styles.column}>
                <label style={styles.text}>Unit</label>
                <select 
                    style={styles.select}
                    onChange={this.handleChangeUnit}
                >
                    <option>Choose from ...</option>
                    <option value="500mg tablet">500mg tablet</option>
                    <option value="200mg tablet">200mg tablet</option>
                </select>
            </div>

            <button>Add</button>
          </div>
          
        </form>
      );
    }
  }
  
export default MedCardForm;

const styles = {
  container: {
    width: '80%',
    backgroundColor: '#d9d9d9',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '1em',
  },
  column: {
    width: '20%',
    display: 'flex',
    height: '50%',
    borderRadius: '8px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '1em 0',
    minHeight: '3em',
  },
  text: {
    margin: '0',
    fontSize: '10px',
  },
  input: {
    width: '70%',
    fontSize: '10px',
  },
  select: {
    fontSize: '10px', 
    width: '80%',
  },
};