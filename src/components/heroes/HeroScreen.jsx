import React, { useMemo } from 'react'
import { Navbar } from '../ui/Navbar'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getheroById } from '../../selectors'

export const HeroScreen = () => {

  const { heroeId } = useParams()
  const nagivate = useNavigate()

  const hero = useMemo(() => getheroById(heroeId), [heroeId]); 

  if (!hero) {
    return (
      <Navigate to={"/Marvel"} />
    )
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

  } = hero

  const handleReturn = ()=>{
    nagivate(-1)
  }

  return (
    <>
      <div className='row mt-5'>
        <div className='col-4'>
          <img src={`/assets/heroes/${heroeId}.jpg`} className='img-thumbnail animate__animated animate__backInLeft' alt={superhero} />

        </div>
        <div className='col-8 animate__animated animate__fadeIn'>
          <h3>{superhero}</h3>
          <ul className='lis-group list-group-flush'>
            <li className='list-group-item'>
              <b>Alter ego: </b> {alter_ego}
            </li>
            <li className='list-group-item'>
              <b>Publisher: </b> {publisher}
            </li>
            <li className='list-group-item'>
              <b>First appearance: </b> {first_appearance}
            </li>

          </ul>
          <h5>Characters</h5>
          <p>{characters}</p>
          <button className='btn btn-outline-info' onClick={handleReturn}>
            Return
          </button>

        </div>
      </div>
    </>

  )
}
