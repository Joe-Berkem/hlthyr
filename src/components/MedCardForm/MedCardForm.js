import React, { Component } from "react";

class MedCardForm extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
          medName: this.props.medName,
          medId:this.props.medId,
          stock: this.props.stock,
          dose: this.props.dose,
          frequency: this.props.frequency,
          unit: this.props.unit,
      };
  
      this.handleChangeMedName = this.handleChangeMedName.bind(this);
      this.handleChangeStock = this.handleChangeStock.bind(this);
      this.handleChangeDose = this.handleChangeDose.bind(this);
      this.handleChangeUnit = this.handleChangeUnit.bind(this);
      this.handleChangeFrequency = this.handleChangeFrequency.bind(this);
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeMedName(e) {
      let medId 

      for (let [key, value] of Object.entries(this.props.meds)) {
        console.log(this.props.meds);
        if (value.name.toLowerCase() === e.currentTarget.value.toLowerCase()) {
          medId = key;
        }
        else {
          medId = null;
        }

      }


      this.setState({ medName: e.currentTarget.value, medId: medId });
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

    handleChangeFrequency(e) {
      this.setState({ frequency: e.currentTarget.value });
    }

  
    handleSubmit(e) {
      e.preventDefault();
      this.props.submitMed(this.state);
    }
  
    render() {
        let {medName, stock, unit, dose, frequency} = this.state;
  
      return (
        <form onSubmit={ this.handleSubmit }>
          <div style={styles.container}>
            <div style={styles.column}>
                <label style={styles.text}>Med Type</label>
                <select 
                    style={styles.select}
                    onChange={this.handleChangeMedName}
                >
                    <option>Choose from ...</option>
                    <option medId="1" selected={ medName === "Paracetomol" ? "selected" : ""}
                    value="Paracetomol">Paracetomol</option>
                    <option medId="2" selected={ medName === "Ibuprofen" ? "selected" : ""} value="Ibuprofen">Ibuprofen</option>
                    <option medId="3" selected={ medName === "Warfarin" ? "selected" : ""} value="Warfarin">Warfarin</option>
                    <option medId="4" selected={ medName === "Asperin" ? "selected" : ""} value="Asperin">Asperin</option>
                    <option medId="5" selected={ medName === "Codeine" ? "selected" : ""} value="Codeine">Codeine</option>
                    <option medId="6" selected={ medName === "Amoxicillin" ? "selected" : ""} value="Amoxicillin">Amoxicillin</option>
                    <option medId="7" selected={ medName === "Diazepan" ? "selected" : ""} value="Diazepan">Diazepan</option>
                    <option medId="8" selected={ medName === "Zopiclone" ? "selected" : ""} value="Zopiclone">Zopiclone</option>
                    <option medId="9" selected={ medName === "Nitrofurantoin" ? "selected" : ""} value="Nitrofurantoin">Nitrofurantoin</option>
                    <option medId="10" selected={ medName === "Pravastatin" ? "selected" : ""}value="Pravastatin">Pravastatin</option>
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
                <label style={styles.text}>Dosage</label>
                <input
                style={styles.input}
                onChange={ this.handleChangeDose }
                type="number"
                value={dose}
                />
            </div>

            <div style={styles.column}>
                <label style={styles.text}>Frequency</label>
                <select 
                    style={styles.select}
                    onChange={this.handleChangeFrequency}
                >
                    <option>Choose from ...</option>
                    <option selected={ frequency === "Once" ? "selected" : ""} value="Once" index="1">Once</option>
                    <option selected={ frequency === "Twice" ? "selected" : ""} value="Twice" index="2">Twice</option>
                    <option selected={ frequency === "Three Times" ? "selected" : ""} value="Three Times" index="3">Three Times</option>
                </select>
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

            <button style={styles.button}>Add</button>
          </div>
          
        </form>
      );
    }
  }
  
export default MedCardForm;

const styles = {
  container: {
    width: '95%',
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
    margin: '1em',
    fontSize: '12px',
  },
  input: {
    width: '70%',
    fontSize: '12px',
    marginBottom: '1em',
  },
  select: {
    fontSize: '12px', 
    width: '80%',
    marginBottom: '1em',
  },
  button: {
    backgroundColor: '#857eb1',
    borderRadius: '8px',
    color: 'white',
    border: 'none',
    padding: '0.5em',
  }
};