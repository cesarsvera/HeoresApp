import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const Marvel = () => {
  return (
    <div>
        <h1>Marvel</h1>
        <HeroList publisher={'Marvel Comics'}/>
    </div>
  )
}
