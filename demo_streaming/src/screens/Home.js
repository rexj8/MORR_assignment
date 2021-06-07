import React from 'react'
import Card from '../assets/Card'
import Nav2 from "../assets/Nav2"
import "./home.css"
import { useHistory } from 'react-router-dom'



function Home() {
    const history=useHistory()
    return (
        <div>
            <Nav2 type="Popular Titles"/>
                <div className="body">
                    <div onClick={()=>{history.push('/movies')}}>
                        <Card url="../clapperboard.png"alt="movie icon" title="Popular Movies"/>
                    </div>
                    <div onClick={()=>{history.push('/series')}}>
                        <Card url="../clapperboard.png"alt="series icon" title="Popular series"/>
                    </div>
                </div>
        </div>
    )
}

export default Home
