import './SearchBar.css'
import { useState } from 'react';


function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div 
        className="SearchBar" 
        style={{ textAlign: 'center' }} 
        >
            <form onSubmit={handleFormSubmit} >

            <input 
            style={{ fontSize: 20 + 'px' }} 
            type="text" 
            placeholder="Type your Search Keyword here"
            value={term}
            onChange={handleChange}
            />
            <p>Showing images for: {term} </p>
            </form>

        </div>
    );
};

export default SearchBar;