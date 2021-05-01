import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import Button from '../StyledElements/Button';
import Box from '../StyledElements/Box';
import PopupMovieCard from './PopupMovieCard';
 
export default function Popup(props) {
	const { setPopupOpen, nominatedMovies } = props;
  
    return (
    <PopupBox>
		<Box>
			<Header>Thank you for nominating your top movies!</Header>
			<CardsWrapper>
				{nominatedMovies.map((movie) => (
					<PopupMovieCard 
						movie={movie}
						key={movie.imdbID}
					/>))
				}
			</CardsWrapper>
			<Footnote>You can go back and edit your selection</Footnote>
			<StyledButton onClick={() => setPopupOpen(false)}>Return to Nominations</StyledButton>
			<SocialMediaWrapper>
				<FacebookShareButton 
					url='https://shopify-app-blush.vercel.app/'
					quote='Help your favorite movies win The Shoppies!'
					hashtag='#theshoppies'
				>
					<FacebookIcon size={30} round={true} />
				</FacebookShareButton>
				<TwitterShareButton
					url='https://shopify-app-blush.vercel.app/'
					title='Help your favorite movies win The Shoppies!'
					hashtag='#theshoppies'
				> 
					<TwitterIcon size={30} round={true} />
				</TwitterShareButton>
			</SocialMediaWrapper>
		</Box>
		<Confetti />
    </PopupBox>
  );
};

const PopupBox = styled.div`
	position: fixed;
	background: #00000050;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
`;

const CardsWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	margin-bottom: 1.25em;
	margin-top: 0.5em;
`;

const Footnote = styled.p`
	font-size: 0.7em;
	margin: 0 0 0.5em 0;
`;

const StyledButton = styled(Button)`
	width: 40%;
	align-self: center;
	margin: 0 0 0.5em 0;
`;

const Header = styled.div`
	color: #004c3f;
	font-size: 1.5em;
	font-weight: 600;
	margin-bottom: 0.5em;
`;

const SocialMediaWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0.5em;
`;