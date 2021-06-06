import React from "react";
// import './Cards.css'

class Cards extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <a href="#" className="card-link">
                    <div className="card">
                        <h1>{this.props.name}</h1>
                    </div>
                    <div className="card-title">Popular {this.props.name}</div>
                </a>
            </>
        )
    }
}

export default Cards