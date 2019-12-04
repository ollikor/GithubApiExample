import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Repositories(props) {
    let repositories = [];
    if (props.repositories) {
        repositories = props.repositories
    }
    return (
        <ul>
            {
                repositories.map(item => (
                    <li key={item.id} className="Repositories"><Link to={`/repository/${item.name}`}>{item.name}</Link></li>
                ))
            }
        </ul>
    )
}

export default Repositories;