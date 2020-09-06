import React, { useState, useEffect } from 'react'

import { api } from '../../service/api'
import { slide_settings } from '../../utils/slideSettigns'
import Slider from "react-slick";

import './styles.css'
import { ConfrontosHoje } from '../ConfrontosHoje'

export function ListaConfrontosHoje ({enableLoadingResults}) {
  const [confrontos, setConfrontos] = useState([{
    home_team: '',
    visited_team: '',
    result: ''
  }])

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get('/resultado');

      setConfrontos(data);
      setLoading(true);
      enableLoadingResults()
    };
    fetchData();
  }, []);

  return (
    <Slider {...slide_settings} className="lista-confrontos">
      { 
        loading ? confrontos.map((confronto, i) => {
          return <ConfrontosHoje key={i} {...confronto} />
        }) : null
      }
    </Slider>
  )
}