import React from 'react';
import './Habitat.scss';
import Critter from '../Critter/Critter';

//refactor diet and fun_fact
//refactor pass through 

export const Habitat = ({ critters, releaseCritter }) => {
    const critterCards = critters.map(critter => {
        return <Critter {...critter} releaseCritter={releaseCritter} />
    })

    return (
        <section className='habitat'>
            {critterCards}
        </section>
    )
}