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

export default function BestSeller() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bestSeller, setBestSeller] = useState([]);
  async function getBestSeller() {
    try {
      const {
        data: { item: bestSeller },
      } = await interparkApi.bestSeller();
      setBestSeller(bestSeller);
      console.log(bestSeller);
    } catch {
      setError("Cannot find best sellers information");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getBestSeller();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Header />
      <Title>
        <Front>인터파크</Front>
        <End>베스트셀러</End>
      </Title>
      <Section
        children={bestSeller.map((book) => (
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
