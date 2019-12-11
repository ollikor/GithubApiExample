import React from 'react';
import {
    Link
  } from "react-router-dom";

function Repositories(props) {
console.log(props.repositories);
    function Style(index) {
        if(index % 2 === 0) {
            return { backgroundColor: "#737373", color: "#ffffff" }
        }else {
            return { backgroundColor: "#ffffff", color: "#737373" }
        }
    }

    return (
        <ul>
            {
                props.repositories === null ?
                <li className="Repositories">not found</li> :
                props.repositories.map((item, index) => (
                    <li key={index} style={Style(index)} className="Repositories"><Link style={Style(index)} className="RepositoriesLink" to={`/${item.owner.login}/${item.name}`}>{item.name}</Link></li>
                ))
            }
        </ul>
    )
}

export default Repositories;