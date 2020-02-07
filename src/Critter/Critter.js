import React from 'react';
import './Critter.scss';

//refactor diet and fun_fact

export const Critter = ({name, diet, fun_fact, releaseCritter}) => {
    return (
        <section className='critter'>
            <h1>{name}</h1>
            <p>{diet}</p>
            <p>{fun_fact}</p>
            <button onClick={releaseCritter}>Release</button>
        </section>
    )
}