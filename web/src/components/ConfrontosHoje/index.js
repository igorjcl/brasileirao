import React from 'react'

import './styles.css'

export function ConfrontosHoje ({home_team, visited_team, result }) {
  return (
    <div className="confronto">
      <div className="time">
        <img src={home_team} alt="Time de casa"/>
      </div>
      <div className="horario">{result}</div>
      <div className="time">
        <img src={visited_team} alt="Time visitante"/>
      </div>
    </div>
  )
}