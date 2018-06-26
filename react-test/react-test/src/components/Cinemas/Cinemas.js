import React, {Component} from 'react';
import Cinema from './Cinema';

class Cinemas extends Component {

    state = {
        cinemas: [
            {
                name: "Arena",
                address: "Mladost",
                pic: "tuk trqbva da ima kartinka",
                programm: []
            },
            {
                name: "Cinegrand",
                address: "Mall",
                pic: "tuk trqbva da ima kartinka",
                programm: []
            },
            {
                name: "ImaX",
                address: "City",
                pic: "tuk trqbva da ima kartinka",
                programm: []
            },
            {
                name: "MyCinema",
                address: "My Address",
                pic: "tuk trqbva da ima kartinka",
                programm: []
            }
        ]
    }
    
    render() {
        return this.state.cinemas.map((cinema) => (
            <Cinema
            pic={cinema.pic}
            name={cinema.name}
            address={cinema.address}
            program={cinema.programm} >
            </Cinema>
        ));
    }
}

export default Cinemas;