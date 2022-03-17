import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 400px;
  min-width: 400px;
  height: 220px;
  background-color: #e3e3e3d6;
  margin: 50px;

  border-radius: 7px;
  box-shadow: 2px 2px 4px #d7d7d7;

  padding: 5px;

  display: flex;
  flex-direction: row;
`;

const PosterDiv = styled.div`
  width: 120px;
  height: 100%;
`;

const ContentDiv = styled.div`
  width: calc(100% - 120px);
  height: 100%;
`;

const PosterImg = styled.img`
  width: 130px;
  object-fit: cover;

  margin-top: -20px;
  margin-left: -20px;

  border-radius: 7px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const Vote = styled.div`
  font-size: 12.5px;
  color: #999;

  margin-bottom: 25px;
`;

const Overview = styled.div`
  word-break: break-all;
`;

const MovieBox = ({ title, vote, over, posterPath }) => {
  return (
    <Box>
      <PosterDiv>
        <PosterImg src={`https://image.tmdb.org/t/p/w500${posterPath}`} />
      </PosterDiv>
      <ContentDiv>
        <Title>🔹 {title}</Title>
        <Vote>⭐️ {vote}</Vote>
        <Overview>
          {over.length > 120 ? over.substring(0, 120) + "..." : over}
        </Overview>
      </ContentDiv>
    </Box>
  );
};

export default MovieBox;
