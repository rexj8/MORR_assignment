import React from "react";

class MovieLists extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     names:[]
        // }
    }

    state={
        loading:true,
        showCard:null,
    };
    const names = data.entries
    
    getData(){

    }

    async componentDidMount(){
        const url = "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
        const response = await fetch(url);
        const data=await response.json();
        // for (var i=0 ; i<21 ;i++){
            // this.setState({names:this.names.add(data[20])});
            this.setState({showCard: data.entries[20], loading: false , names: data});
            console.log(this.names);
            console.log(this.names.entries[0]);
        // }

        
    }

    render(){
        return(
            <>
                {this.state.loading || !this.state.showCard ? 
                (<div>Loading...</div>) : (
                    <div>
                        <div>{this.state.showCard.title}</div>
                    </div>
                )}
            </>
        )
    }
}

export default MovieLists