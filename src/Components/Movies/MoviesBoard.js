import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MovieCard from './MovieCard';
import NominatedMovieCard from './NominatedMovieCard';
import SearchArea from './SearchArea';
import Popup from './Popup';
import Subheader from '../StyledElements/Subheader';
import DashboardWrapper from '../StyledElements/DashboardWrapper';
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
            return <LoaderSpinner
                type='ThreeDots' 
                color='black' 
                height={50} 
                width={50} 
                data-testid='loader-spinner'
            />
        } else {
            return <Directions>Please search for movies above ☝️</Directions>
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

const StyledDashboardWrapper = styled(DashboardWrapper)`
    max-height: 570px;
`;

const Directions = styled.div`
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
`;