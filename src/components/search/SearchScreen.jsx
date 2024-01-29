import React, { useMemo } from 'react'
import { heroes } from '../../data/heroes'
import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { getHeroesByName } from '../../selectors/getHeroesByName'

export const SearchScreen = () => {



    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)
    const heroes = useMemo(() => getHeroesByName(q), [q])
    const { searchText, changeValue } = useForm({
        searchText: q
    })
    // const {searchText} = form

    const handleFiler = (event) => {
        event.preventDefault()
        if (searchText.trim().length <= 1) {
            navigate(``)
            return 
        }
        navigate(`?q=${searchText.toLowerCase().trim()}`)
        // heroFilters = heroFilters.filter(heroe => heroe.superhero)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleFiler}>
                        <input
                            type='text'
                            placeholder='Find your hero'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            onChange={changeValue}
                            autoComplete='off'
                        />
                        <button
                            type='submit'
                            className='btn btn-block btn-outline-primary mt-2'
                        >
                            Search...
                        </button>
                    </form>


                </div>

                <div className='col-7'>
                    <h4>Results...</h4>
                    <hr />

                    {
                        (q === '')
                        ?
                        (<div className='alert alert-primary'>
                            Search a hero
                        </div>
                        )
                        : (heroes.length === 0) 
                        
                        &&
                        (
                            <div className='alert alert-danger'>
                                No hero with <b>{q}</b>
                            </div>
                        )
                    }



                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))

                    }

                </div>

            </div>
        </div>
    )
}
