import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  background-color: #f6f5f5;
  border-radius: 15px;
  padding: 10px;
  border: 1px solid #cec7be;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 15px 0px;
  padding-left: 35px;
`;

const Link = styled.a`
  width: 100%;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 30vh;
  width: 100%;
  padding: 20px;
  background-size: cover;
  background-position: center center;
`;

const Rank = styled.span`
  font-size: 25px;
  margin-right: 10px;
  border-bottom: 1px solid black;
  height: 10%;
  padding: 2px;
  margin-left: 10px;
`;

const Title = styled.span`
  display: flex;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Author = styled.span``;

const Publisher = styled.span``;

const Price = styled.span`
  display: block;
  margin: 10px 0px;
  font-size: 17px;
  font-weight: 600;
`;

const Rating = styled.span`
  display: block;
`;

const Information = ({
  id,
  imgUrl,
  rank,
  title,
  author,
  price,
  publisher,
  discount,
  rating,
  link,
}) => (
  <Container>
    <ImageContainer>
      <Link href={link}>
        <Image bgUrl={imgUrl} />
      </Link>
      <Rank>{rank}</Rank>
    </ImageContainer>
    <Link href={link}>
      <Title>
        {title.length > 14 ? `${title.substring(0, 14)}...` : title}
      </Title>
    </Link>
    <Author>{author}/</Author>
    <Publisher>{publisher}</Publisher>
    <Price>
      {price}원({discount}%할인)
    </Price>
    <Rating>
      <span role="img" aria-label="rating">
        💖
      </span>
      {rating}/10
    </Rating>
  </Container>
);

Information.propTypes = {
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string,
  number: PropTypes.number,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  price: PropTypes.number,
  publisher: PropTypes.string,
  discount: PropTypes.string,
  rating: PropTypes.number,
  link: PropTypes.string,
};

export default Information;
