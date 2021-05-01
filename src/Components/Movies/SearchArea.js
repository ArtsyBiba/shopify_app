import { useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import debounce from 'lodash.debounce';

import SearchInput from '../StyledElements/SearchInput';

export default function MovieCard(props) {
    const { setMovies, setIsLoading } = props;
    const [query, setQuery] = useState('');
    
    const searchMovies = (nextValue) => {
        const key = process.env.REACT_APP_OMDB_KEY;
        setMovies([]);
        
        axios.get(`https://www.omdbapi.com/?apikey=${key}&s=${nextValue}&type=movie`)
        .then(res => {
            setMovies(res.data.Search);
            setIsLoading(false);
        })
        .catch(err => {
            console.log(err);
        });
    };

    const debounceSearch = useRef(
        debounce((nextValue) => searchMovies(nextValue), 500)
    ).current;

    const handleChange = (e) => {
        setIsLoading(true);
        const nextValue = e.target.value;
        setQuery(nextValue);
        debounceSearch(nextValue);
    };

    return (
        <SearchBox>
            <SearchInput
                type='text'
                placeholder={`Search for your favorite movies`}
                value={query}
                onChange={(e) => handleChange(e)}
            />
        </SearchBox>
    )
};

const SearchBox = styled.div`
    justify-content: flex-start;
    margin-bottom: 1rem;
    display: flex;

	@media(max-width: 600px) {
        flex-wrap: wrap;
    }
`;