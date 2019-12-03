import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../App.css';

function handleSubmit(e) {
    alert('daf')
    e.preventDefault()
}

function handleChange() {

}

function Search() {
    return (
        <div className="Search">
            <form onSubmit={handleSubmit}>
                <label>
                    Search repositories with username
                </label>
                <input
                    id="new-todo"
                    placeholder="username"
                    onChange={handleChange}
                />
                <button>
                    <FontAwesomeIcon icon="search" />
                </button>
            </form>
        </div>
    )
}

export default Search;