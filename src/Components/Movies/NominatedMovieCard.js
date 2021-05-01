import styled from 'styled-components';

import Button from '../StyledElements/Button';
import Poster from '../StyledElements/Poster';

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
`;