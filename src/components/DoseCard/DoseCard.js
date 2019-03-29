import React from 'react';
import { capitalise } from '../../utils';
// import { checkBoxDoom } from '../../actions/doseInfo';

const DoseCard = ({
  id,
  time,
  medName,
  medColour,
  dose,
  unit,
  onClickCheckbox,
  taken,
  missed,
}) => (
  <div style={styles.container}>
    <div style={styles.column}>
      <p style={styles.text}>{time}</p>
    </div>

    <div style={styles.column}>
      <p style={styles.text}>{capitalise(medName)}</p>
      <p style={styles.text}>
        {dose} x {unit}
      </p>
    </div>

    <div style={styles.column}>
      <div>
        <p style={styles.text}>Taken</p>
        <input
          checked={taken}
          onClick={() => onClickCheckbox('taken', id, !taken)}
          type='checkbox'
        />
      </div>
      <div>
        <p style={styles.text}>Missed</p>
        <input
          checked={missed}
          onClick={() => onClickCheckbox('missed', id, !missed)}
          type='checkbox'
        />
      </div>
    </div>
  </div>
);

export default DoseCard;

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
    width: '25%',
    display: 'flex',
    height: '50%',
    borderRadius: '8px',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: '1em 0',
    minHeight: '3em',
  },
  text: {
    margin: '0',
  },
};
