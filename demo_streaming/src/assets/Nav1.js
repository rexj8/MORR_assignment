import React from 'react'
import "./nav1.css"
import { useHistory } from 'react-router-dom'

function Nav1() {
    const history=useHistory()
    return (
        <div className="nav">
            <div onClick={()=>{history.push('/')}} className="logo">DEMO Streaming</div>
            <div className="right">
                <ul>
                    <li>Login</li>
                    <li>Start Your Free Trial</li>
                </ul>
            </div>                                               
        </div>
    )
}

export default Nav1
