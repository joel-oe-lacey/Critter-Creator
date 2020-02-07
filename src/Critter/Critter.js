import React from 'react';
import './Critter.scss';

//refactor diet and fun_fact

const Critter = ({id, name, diet, fun_fact, releaseCritter}) => {
    return (
        <section className='critter'>
            <h1>{`Name: ${name}`}</h1>
            <p>{`Diet: ${diet}`}</p>
            <p>{`Fun Fact: ${fun_fact}`}</p>
            <button onClick={() => releaseCritter(id)}>Release</button>
        </section>
    )
}

export default Critter;