import React, { useState, useEffect } from "react";
import { interparkApi } from "../../api";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Section from "../../Components/Section";
import Information from "../../Components/Information";
import Header from "../../Components/Header";

const Container = styled.div``;

const Title = styled.div`
  position: absolute;
  margin-top: 50px;
  display: flex;
  font-size: 30px;
  padding: 30px 50px;
`;

const Front = styled.span`
  display: flex;
  margin-right: 10px;
`;
const End = styled.span`
  font-weight: 600;
  display: flex;
`;

export default function Recommend() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommend, setRecommend] = useState([]);
  async function getRecommend() {
    try {
      const {
        data: { item: recommend },
      } = await interparkApi.recommend();
      setRecommend(recommend);
      console.log(recommend);
    } catch {
      setError("Cannot find best sellers information");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getRecommend();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Header />
      <Title>
        <Front>미디어</Front>
        <End>추천도서</End>
      </Title>
      <Section
        children={recommend.map((book) => (
          <Information
            key={book.itemId}
            id={book.itemId}
            imgUrl={book.coverLargeUrl}
            rank={book.rank}
            title={book.title}
            author={book.author}
            price={book.priceSales}
            publisher={book.publisher}
            discount={book.discountRate}
            rating={book.customerReviewRank}
            link={book.additionalLink}
          />
        ))}
      />
    </Container>
  );
}
