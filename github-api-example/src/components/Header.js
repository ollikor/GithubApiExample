import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../App.css';

function Header() {
    return (
        <header className="App-header">
            <p className="Header-title">Github API Example</p>
            <FontAwesomeIcon className="Header-logo" icon={['fab', 'github']} />
        </header>
    )
}

export default Header;