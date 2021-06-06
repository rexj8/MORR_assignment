import React from "react";
import './Navbar.css'

class Navbar extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <>
                <div className="navbar">
                    <h1>DEMO Streaming</h1>
                    <a href="#">Log In</a>
                    <a href="#" class="free-trial">Start your Free Trial</a>
                </div>
                <div className="page-info">
                    <h3>Popular {this.props.name}</h3>
                </div>
            </>
        )
    }
}
export default Navbar 