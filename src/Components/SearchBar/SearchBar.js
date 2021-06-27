import React from 'react';
const SearchBar = ({searchField, searchChange}) => {
    return (
        <div className="pa2">
            <input
                value={searchField}
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBar;