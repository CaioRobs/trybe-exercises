import styled from 'styled-components';

export const StyledApp = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 16px;
`;

export const StyledHeader = styled.header`
  align-items: center;
  background-color: #343a40;
  display: flex;
  height: 100px;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
    color: #f8f9fa;
    font-size: 28px;
    font-weight: 500;
    text-align: center;
`;

export const MoviesSection = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 48px 30px;
`;

export const StyledMovieCard = styled.div`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 450px;
  margin: 5px;
  overflow: hidden;
  width: 300px;
`;

export const StyledMovieImg = styled.img`
  width: 100%;
`;

export const StyledMovieCardBody = styled.div`
  flex: 1 1 auto;
  padding: 20px;
`;

export const StyledTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin: 0 0 12px;
`;

export const StyledSubtitle = styled.h5`
  color: #6c757d;
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 8px;
`;

export const StyledStoryline = styled.p`
  font-size: 14px;
  height: 85px;
  text-align: justify;
`;

export const StyledRatingSection = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`;

export const StyledRating = styled.p`
  background-color: #007bff;
  border-radius: 25px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  padding: 3px 9px;
`;
