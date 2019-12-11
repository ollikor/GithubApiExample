import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
    return (
        <header className="App-header">
            <div className="Header-content">
                <p className="Header-title">Github API Example</p>
                <FontAwesomeIcon className="Header-logo" icon={['fab', 'github']} />
            </div>
        </header>
    )
}

export default Header;