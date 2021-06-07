import React, { useEffect, useState } from 'react'
import Nav2 from "../assets/Nav2"
import axios from "axios"
import Card from '../assets/Card'
import"./movie.css"
        
function Movie(props) {
    const [movies, setMovies] = useState([])
    const[error,setError]=useState([])
    const[isLoading,setLoading]=useState([true])
    
    useEffect(() =>
    {   
        async function fetchData()
        {
            try{
                const request = await axios.get("https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json")
                setLoading(false)
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
                catch(error)
                {
                    setError(true)
                } 
        }
        fetchData()
    }, [props.type])
    return (
        <div className="main">
            <Nav2 type="Popular Movies"/>
            <div className="rows">
                {
                    isLoading ?(<h1>Loading...</h1>):
                    ! error ?(<h1>Oops something went Wrong...</h1>)
                    :(
                        movies.slice(0,21).map((movie)=>
                            <Card className="card" url={`${movie.images['Poster Art'].url}`} alt="poster" title={movie.title}/>
                            )
                    )
                }
            </div>
        </div>
    )
}

export default Movie
