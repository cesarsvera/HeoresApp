import React from 'react'
import { getheroByPublisher } from '../../selectors'

export const HeroList = ({publisher}) => {

    const heroes = getheroByPublisher(publisher)

    return (
        <ul>
            {
                heroes.map(hero => (
                    <li key={hero.id}>
                        {hero.superhero}
                    </li>
                ))
            }

        </ul>
    )
}
