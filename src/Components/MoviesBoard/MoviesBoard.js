import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import MovieCard from './MovieCard';
import NominatedMovieCard from './NominatedMovieCard';
import SearchArea from '../Search/SearchArea';
import Popup from '../Popup/Popup';
import LoaderSpinner from '../Common/LoaderSpinner';
import Button from '../Common/Button';

export default function MoviesBoard() {
    const [movies, setMovies] = useState([]);
    const [nominatedMovies, setNominatedMovies] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        if(nominatedMovies.length === 5) {
            setPopupOpen(true);
        };
    }, [nominatedMovies]);

    const handleLoadMore = () => {
        const page = Math.round(movies.length / 10 + 1);
        const key = process.env.REACT_APP_OMDB_KEY;
        
        axios.get(`https://www.omdbapi.com/?apikey=${key}&s=${query}&type=movie&page=${page}`)
        .then(res => {
            const newMovies = res.data.Search;
            setMovies(prevMovies => [...prevMovies, ...newMovies]);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const renderMovies = () => {
        if(!isLoading && movies && movies.length > 0) {
            return (
                <>
                {movies.map((movie) => (
                    <MovieCard 
                        movie={movie}
                        key={movie.imdbID}
                        movies={movies}
                        setMovies={setMovies}
                        nominatedMovies={nominatedMovies}
                        setNominatedMovies={setNominatedMovies}
                    />))
                }
                {movies.length >= 10 && movies.length % 10 === 0 && 
                    <StyledButton onClick={handleLoadMore}>
                        Load More
                    </StyledButton>
                }
                </>
                )
        } else if(isLoading) {
            return (
                <LoaderSpinner/>
            )
        } else {
            return (
                <Directions>Please search for movies above ☝️</Directions>
            )
        }
    };

    return (
        <>
            <SearchArea 
                setMovies={setMovies}
                setIsLoading={setIsLoading}
                query={query}
                setQuery={setQuery}
            />
            <MoviesWrapper>
                <DashboardWrapper>
                    <Subheader>Search Results</Subheader>
                    {renderMovies()}
                </DashboardWrapper>
                <StyledDashboardWrapper>
                    <Subheader>Nominations</Subheader>
                    {nominatedMovies.length > 0
                        ? nominatedMovies.map((movie) => (
                            <NominatedMovieCard 
                                movie={movie}
                                key={movie.imdbID}
                                movies={movies}
                                setMovies={setMovies}
                                nominatedMovies={nominatedMovies}
                                setNominatedMovies={setNominatedMovies}
                            />))
                        : <Directions>👈 Please nominate 5 favorite movies</Directions>
                    }
                </StyledDashboardWrapper>
            </MoviesWrapper>
            {popupOpen && 
                <Popup setPopupOpen={setPopupOpen} nominatedMovies={nominatedMovies}/>
            }
        </>
    )
};

const MoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const DashboardWrapper = styled.div`
    width: 49%;
    text-align: center;
    box-sizing: border-box;
	font-size: 1rem;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    background: white;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
    border: 1px solid transparent;
    border-radius: 6px;
    overflow: hidden;
`;

const StyledDashboardWrapper = styled(DashboardWrapper)`
    max-height: 570px;
`;

const Directions = styled.div`
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
`;

const Subheader = styled.h4`
    margin: 0 0 1em 0;
    background: #008060;
    color: #ffffff;
    padding-top: 0.75em;
    padding-bottom: 0.75em;
    border-radius: 6px 6px 0 0;
`;

const StyledButton = styled(Button)`
    margin: 0.5em 0 1em 0;
    background: #f2971f;

    @media(max-width: 600px) {
        font-size: 0.6em;
    }
`;