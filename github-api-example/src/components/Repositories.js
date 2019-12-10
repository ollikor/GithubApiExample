import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Repositories(props) {

    function Style(index) {
        if(index % 2 == 0) {
            return { backgroundColor: "#737373", color: "#ffffff" }
        }else {
            return { backgroundColor: "#ffffff", color: "#737373" }
        }
    }

    let repositories = [];
    if (props.repositories) {
        repositories = props.repositories
    }
    return (
        <ul>
            {
                repositories.map((item, index) => (
                    <li key={index} style={Style(index)} className="Repositories"><Link style={Style(index)} className="RepositoriesLink" to={`/${item.owner.login}/${item.name}`}>{item.name}</Link></li>
                ))
            }
        </ul>
    )
}

export default Repositories;