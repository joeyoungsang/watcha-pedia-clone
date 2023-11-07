import styled from 'styled-components';

export const MoviesBody = styled.div`
	margin-top: 100px;
	margin-bottom: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const MovieContent = styled.div`
	width: 90%;
`;

export const RankNumber = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-bg-black);
	color: var(--color-bg-white);
	font-size: 16px;
	font-weight: bold;
	border-radius: 3px;
	padding: 7px 3px 5px 3px;
	width: 30px;
	height: 30px;
	left: 8px;
	top: 8px;
`;

export const SwiperImg = styled.img`
	width: 90%;
	height: 100%;
	border-radius: 5px;
	margin-right: 10px;
	cursor: pointer;
`;

export const SwiperWrap = styled.div`
	width: 80%;
	height: 100%;
	margin: auto;
`;

export const StyledSwiperContainer = styled.div`
	.swiper-slide {
		font-size: 16px;
		overflow: hidden;
	}

	.swiper-button-prev {
		left: -10px;
	}

	.swiper-button-next {
		/* right: -30px; // 버튼을 오른쪽으로 이동 */
	}
`;
