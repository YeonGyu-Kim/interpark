import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { interparkApi } from "../../api";
import Section from "../../Components/Section";
import Information from "../../Components/Information";
import Loader from "../../Components/Loader";

const Headers = styled.header`
  display: flex;
  top: 0;
  justify-content: center;
  padding: 40px 0px;
`;

const Home = styled.span`
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  font-size: 35px;
  width: 30vw;
`;

const Form = styled.form`
  border-bottom: 2px solid #ef544d;
  margin-left: 50px;
  margin-top: 3px;
`;

const Input = styled.input`
  width: 30vw;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #f9fafb;
`;
const SLink = styled(Link)``;

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

const Icon = styled.span`
  position: absolute;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 300px;
  font-size: 50px;
  opacity: 0.5;
`;

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm !== "") {
      searchByTerm(searchTerm);
    }

    setSearchTerm("");
  };

  const searchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { item: result },
      } = await interparkApi.search(searchTerm);
      setResult(result);
      console.log(result);
    } catch {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Headers>
        <SLink to="/">
          <Home>도서 Interpark</Home>
        </SLink>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="검색어를 입력하세요."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </Form>
      </Headers>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Title>
            <Front>도서 검색</Front>
            <End>결과</End>
          </Title>
          {result && result.length > 0 && (
            <Section
              children={result.map((book) => (
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
          )}
        </>
      )}
      {result.length === 0 && (
        <Icon>
          <i className="fas fa-search"></i>
        </Icon>
      )}
    </Container>
  );
}
