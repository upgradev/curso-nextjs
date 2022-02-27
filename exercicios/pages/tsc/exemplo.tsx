import React from 'react'
import Pessoa from '../../components/Pessoa'

export default function exemploTs() {
  return (
    <div>
        <Pessoa nome='Ana' idade={30} />
        <Pessoa nome='Maria'  />
    </div>
  )
}
