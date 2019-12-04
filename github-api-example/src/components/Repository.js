import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Repository() {
    return (
        <div>
            <Link to="/"><FontAwesomeIcon className="back" icon="long-arrow-alt-left" /></Link>
            <h1>asfd</h1>
        </div>
    )
}

export default Repository;