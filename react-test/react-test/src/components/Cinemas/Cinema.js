import React, {Component} from 'react';

class Cinema extends Component {
    onProgramClicked = (movies) => {
        //TODO: open movies
    }

    render() {
        return(
            <div>
                <span> {this.props.pic} </span>
                <span> {this.props.name} </span>
    
                <span> {this.props.address} </span>
                
                <button onClick={() => this.onProgramClicked(this.props.program)}> Program </button>
            </div>
        )
    }
}

export default Cinema;