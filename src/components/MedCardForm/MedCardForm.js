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
                    <option value="1">Paracetomol</option>
                    <option value="2">Ibuprofen</option>
                    <option value="3">Warfarin</option>
                    <option value="4">Asperin</option>
                    <option value="5">Codeine</option>
                    <option value="6">Amoxicillin</option>
                    <option value="7">Diazepan</option>
                    <option value="8">Zopiclone</option>
                    <option value="9">Nitrofurantoin</option>
                    <option value="10">Pravastatin</option>
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
                <input
                style={styles.input}
                onChange={ this.handleChangeUnit }
                type="number"
                />
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