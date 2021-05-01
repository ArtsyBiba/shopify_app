import React from 'react';
import styled from 'styled-components';
import Confetti from 'react-confetti';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';

import Button from '../Common/Button';
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

	@media(max-width: 600px) {
      max-width: 100px;
      padding: 0.5rem 0.5rem;
      margin: 0.5em 0 0.5em 0em;
	  
    }
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

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	position: relative;
	width: 70%;
	margin: 0 auto;
	height: 50%;
	max-height: 80vh;
	margin-top: calc(100vh - 85vh - 20px);
	background: #fff;
	border-radius: 6px;
	padding: 20px;
	border: 1px solid #999;
	box-shadow: 0 5px 15px 0 rgba(0,0,0,0.45);
`;