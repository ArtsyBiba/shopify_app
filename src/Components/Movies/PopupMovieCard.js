import styled from 'styled-components';

import Poster from '../StyledElements/Poster';

export default function PopupMovieCard(props) {
    const { movie } = props;

    return (
        <>
            <CardWrapper>
                <StyledPoster alt='movie-poster' src={movie.Poster}/>
            </CardWrapper>
        </>
    )
};

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0.5em;
`;

const StyledPoster = styled(Poster)`
    width: 90px;
    height: 124px;
`;