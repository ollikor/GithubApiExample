import React from "react";
import { Link } from "react-router-dom";

// Component shows all repositories
function Repositories(props) {
  // Function to set style depends, that is it the row index even or not
  function style(index) {
    if (index % 2 === 0) {
      return { backgroundColor: "#737373", color: "#ffffff" };
    } else {
      return { backgroundColor: "#ffffff", color: "#737373" };
    }
  }

  return (
    <ul>
      {props.repositories.map((item, index) => (
        <li key={index} style={style(index)} className="Repositories">
          <Link
            style={style(index)}
            className="Repositories-link"
            to={`/${item.owner.login}/${item.name}`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Repositories;
