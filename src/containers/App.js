import React, { Component } from "react";
import CardList from "../components/CardList";
//import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        //fetching robots from api webservice
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json(); })
            .then(users => { this.setState({robots: users}) });

        // use following if want static json values from robots.js file
        //this.setState({ robots: robots} ); 
        console.log('componentDidMount');
    }
    
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const {robots, searchfield} = this.state;

        const filteredRobots = robots.filter(robots=>{
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        console.log('render');
        if (robots.length === 0) {
            return <h1 className="tc">Loading...</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;