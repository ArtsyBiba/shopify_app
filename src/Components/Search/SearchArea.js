import { useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import debounce from 'lodash.debounce';

export default function MovieCard(props) {
    const { setMovies, setIsLoading, query, setQuery } = props;
    
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

const SearchInput = styled.input`
	font-size: 1em;
	padding: 0.5rem 0.5em;
	border-radius: 4px;
	background-color: white;
	border: 1px solid transparent;
	margin: 0.5em 0.5em 0.5em 0;
	height: 1.5em;
	width: 100%;
	box-shadow: 0 0 0 1px #6b7177;
`;
