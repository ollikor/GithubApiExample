import React from 'react';
import {
    Link
} from "react-router-dom";

// Component shows all repositories
function Repositories(props) {
    
    // Function to set style depends, that is it the row index even or not
    function Style(index) {
        if (index % 2 === 0) {
            return { backgroundColor: "#737373", color: "#ffffff" }
        } else {
            return { backgroundColor: "#ffffff", color: "#737373" }
        }
    }

    return (
        <ul>
            {
                // Show error if fetch have failed
                props.repositories === "No repositories" || props.repositories === "Search failed" ?
                    <li className="Repositories">{props.repositories}</li> :
                    props.repositories.map((item, index) => (
                        <li key={index} style={Style(index)} className="Repositories"><Link style={Style(index)} className="Repositories-link" to={`/${item.owner.login}/${item.name}`}>{item.name}</Link></li>
                    ))
            }
        </ul>
    )
}

export default Repositories;