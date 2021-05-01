import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import NominatedMovieCard from './NominatedMovieCard';
import SearchArea from '../Search/SearchArea';
import Popup from '../Popup/Popup';
import LoaderSpinner from '../Common/LoaderSpinner';

export default function MoviesBoard() {
    const [movies, setMovies] = useState([]);
    const [nominatedMovies, setNominatedMovies] = useState([]);
    const [popupOpen, setPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(nominatedMovies.length === 5) {
            setPopupOpen(true);
        };
    }, [nominatedMovies]);

    const renderMovies = () => {
        if(!isLoading && movies && movies.length > 0) {
            return (
                movies.map((movie) => (
                    <MovieCard 
                        movie={movie}
                        key={movie.imdbID}
                        movies={movies}
                        setMovies={setMovies}
                        nominatedMovies={nominatedMovies}
                        setNominatedMovies={setNominatedMovies}
                    />)))
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