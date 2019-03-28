import React, { Component } from "react";

class MedCardForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          medName: this.props.medName,
          stock: this.props.stock,
          dose: this.props.dose,
          unit: this.props.unit,
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
      this.props.submitMed(this.state);
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
                    <option selected={ medName === "Ibuprofen" ? "selected" : ""} value="Ibuprofen">Ibuprofen</option>
                    <option selected={ medName === "Warfarin" ? "selected" : ""} value="Warfarin">Warfarin</option>
                    <option selected={ medName === "Asperin" ? "selected" : ""} value="Asperin">Asperin</option>
                    <option selected={ medName === "Codeine" ? "selected" : ""} value="Codeine">Codeine</option>
                    <option selected={ medName === "Amoxicillin" ? "selected" : ""} value="Amoxicillin">Amoxicillin</option>
                    <option selected={ medName === "Diazepan" ? "selected" : ""} value="Diazepan">Diazepan</option>
                    <option selected={ medName === "Zopiclone" ? "selected" : ""} value="Zopiclone">Zopiclone</option>
                    <option selected={ medName === "Nitrofurantoin" ? "selected" : ""} value="Nitrofurantoin">Nitrofurantoin</option>
                    <option selected={ medName === "Pravastatin" ? "selected" : ""}value="Pravastatin">Pravastatin</option>
                </select>
            </div>
            
            <div style={styles.column}>
                <label style={styles.text}>Stock</label>
                <input
                style={styles.input}
                onChange={ this.handleChangeStock }
                type="number"
                value={stock}
                />
            </div>

            <div style={styles.column}>
                <label style={styles.text}>Dosage per day</label>
                <input
                style={styles.input}
                onChange={ this.handleChangeDose }
                type="number"
                value={dose}
                />
            </div>

            <div style={styles.column}>
                <label style={styles.text}>Unit</label>
                <select 
                    style={styles.select}
                    onChange={this.handleChangeUnit}
                >
                    <option>Choose from ...</option>
                    <option selected={ unit === "500mg tablet" ? "selected" : ""} value="500mg tablet">500mg tablet</option>
                    <option selected={ unit === "200mg tablet" ? "selected" : ""} value="200mg tablet">200mg tablet</option>
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