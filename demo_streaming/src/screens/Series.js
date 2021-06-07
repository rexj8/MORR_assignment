import React, { useEffect, useState } from 'react'
import Nav2 from "../assets/Nav2"
import axios from "axios"
import Card from '../assets/Card'

function Series(props) {
    const [movies, setMovies] = useState([])
    useEffect(() =>
    {   
        async function fetchData()
        {
           const request = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
           const filter=()=>
            {
                var tmp_mov=[]
                request.data.entries.forEach(element=>
                {
                    if(element.releaseYear>=2010 && element.programType===props.type)
                    {
                        tmp_mov.push(element)
                    }
                })
                tmp_mov.sort((m1,m2)=>
                {
                    if (m1.title < m2.title) {
                        return -1;
                      }
                      if (m2.title > m1.title) {
                        return 1;
                      } 
                      return 0
                })
                setMovies(tmp_mov) 
            }
            filter()    
        }
        fetchData()
    }, [props.type])
    return (
        <div>
            <Nav2  type="Popular Series"/>
            {
                movies.slice(0,21).map((movie)=>
                <Card url={`${movie.images['Poster Art'].url}`} alt="poster" title={movie.title}/>
                )
            }
        </div>
    )
}

export default Series
