import styled from 'styled-components';

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

export default Box;