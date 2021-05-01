import styled from 'styled-components';

const Poster = styled.img`
    align-content: center;
    border-radius: 4px;
    border: 1px solid lightgrey;
    width: 60px;
    height: 84px;
    transition: transform 400ms ease-out;
    
    &:hover {
	    transform: scale(1.15);
    }
`;

export default Poster;