import React, {useEffect, useState} from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';
import SearchBar from './Components/SearchBar/SearchBar'
import Scroll from "./Components/Scroll/Scroll";
import {Robots} from "./Components/Robots/Robots";

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    const OnSearchChange = (event) => {
        setSearchField(event.target.value);
    };

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    const CardList = () => {
        return filteredRobots.map((item, index) => {
            return <Cards key={index} id={item.id} name={item.name} username={item.username} email={item.email}/>
        });
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    }, []);

    const Offline = () => {
        return (
            <div className="offline">
                <h2>You are offline</h2>
                <p>Please check your internet connection and try again later</p>
            </div>
        )
    };

    const Online = () => {
        return (
            <div>
                <SearchBar searchField={searchField} searchChange={OnSearchChange}/>
                <Scroll>
                    <CardList/>
                </Scroll>
            </div>
        )
    };

    return (
        <div className="tc">
            <h1 className="f2">RoboFriends</h1>
            {
                robots.length === 0 ? <Offline/> : <Online/>
            }
        </div>
    )
}

export default App;
