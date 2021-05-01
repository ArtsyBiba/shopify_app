import styled from 'styled-components';

const Button = styled.button`
	margin: 1em 0 0.5em 1em;
    color: #ffffff;
	text-transform: uppercase;
	background: #008060;
	border: 1px solid transparent;
	border-radius: 4px;
    transition: all 0.3s ease 0s;
    padding: 0.5rem 2rem;
    font-weight: 600;
    font-size: 0.7em;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.15);
    align-self: flex-end;
    cursor: pointer;
    
    &:hover {
        background: #004c3f;
        box-shadow: 0 5px 15px 0 rgba(0,0,0,0.25);

        transition: all 0.3s ease 0s;
    }
`;


export default Button;