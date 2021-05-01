import styled from 'styled-components';

import Button from '../Common/Button';
import Poster from '../Common/Poster';

export default function MovieCard(props) {
    const { movie, nominatedMovies, setNominatedMovies } = props;
    const handleClick = () => { 
        const idToRemove = movie.imdbID;
        const filteredMovies = nominatedMovies.filter((item) => item.imdbID !== idToRemove);
        setNominatedMovies(filteredMovies);
    };

    return (
        <>
            <CardWrapper>
                <Poster alt='movie-poster' src={movie.Poster} />
                <Details>
                    <Info>{movie.Title} ({movie.Year})</Info>
                    <NominateButton onClick={handleClick}>
                        Remove
                    </NominateButton>
                </Details>
            </CardWrapper>
            <hr></hr>
        </>
    )
};

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5em;
    animation-duration: 1s;
    animation-name: slidein;

    @keyframes slidein {
        from {
            margin-left: 100%;
            width: 300%;
        }

        to {
            margin-left: 0%;
            width: 100%;
        }
    }
`;

const Info = styled.div`
    margin-left: 0.5em;
    text-align: left;

    @media(max-width: 600px) {
      font-size: 0.8em;
    }
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
`;

const NominateButton = styled(Button)`
    background: #f2971f;

    &:hover {
        background: #a65e00;
    }

    @media(max-width: 600px) {
      max-width: 100px;
      padding: 0.5rem 1rem;
      margin: 1em 0 0.5em 0.5em;
    }
`;