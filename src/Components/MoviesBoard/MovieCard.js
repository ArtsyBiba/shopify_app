import styled from 'styled-components';

import Button from '../Common/Button';
import Poster from '../Common/Poster';

export default function MovieCard(props) {
    const { movie, nominatedMovies, setNominatedMovies } = props;
    
    const handleClick = () => {
        if (nominatedMovies.length < 5) {
            let newArr = [...nominatedMovies];
            newArr.push(movie);
            setNominatedMovies(newArr);
        }
    };

    return (
        <>
            <CardWrapper>
                <Poster alt='movie-poster' src={movie.Poster} />
                <Details>
                    <Info>{movie.Title} ({movie.Year})</Info>
                    {!(nominatedMovies.some(e => e.imdbID === movie.imdbID))
                    ?   
                        <Button onClick={handleClick}>
                            Nominate
                        </Button>
                    :
                        <DisabledButton>
                            Nominated
                        </DisabledButton>
                    }
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

const DisabledButton = styled.div`
    color: #ffffff;
	text-transform: uppercase;
	border: 1px solid transparent;
	border-radius: 4px;
    padding: 0.5rem 2rem;
    font-weight: 600;
    font-size: 0.7em;
    align-self: flex-end;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
    background: #a1a6ad;
    margin: 1em 0 0.5em 1em;
`;