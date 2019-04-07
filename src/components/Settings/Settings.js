import React from 'react';

const Settings= ({ name }) => {
    return (

    <section className="screenContainer">
      
        <h1 style={styles.h1}>App Settings</h1>

        <h3 style={styles.banner}>Full Name</h3>
        <input 
            value={name} 
            style={styles.input}
        ></input>

        <hr style={styles.hr}/>

        <h3 style={styles.banner}>Site Contact Email</h3>
        <input
            style={styles.input} 
            value="dorothy.bloggs@gmail.com">
        </input>        

    </section>
)
}

export default Settings;

const styles = {
    container: {
        width: '100%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    hr: {
        width: '35%',
        marginTop: '2em',
        marginBottom: '2em',
    },
    h1: {
        color: 'white',
    },
    banner: {
        width: '50%',
        backgroundColor: '#857eb1',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '1em 3em',
        borderRadius: '8px',
    },
    input: {
        width: '50%',
        borderRadius: '8px',
        padding: '1em',
        fontSize: '1.10em'
    }
}