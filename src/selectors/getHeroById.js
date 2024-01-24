import { heroes } from "../data/heroes";

export const getheroById = (id) =>{


    return heroes.filter(hero => hero.id === id)

}