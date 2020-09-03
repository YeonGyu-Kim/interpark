import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Headers = styled.header`
  display: flex;
  top: 0;
  justify-content: space-around;
  padding: 40px 0px;
`;

const Home = styled.span`
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  font-size: 35px;
  width: 30vw;
`;

const SLink = styled(Link)``;

const ICon = styled.i`
  color: #ef544d;
  font-size: 25px;
`;

const Container = styled.div`
  display: flex;
  font-size: 20px;
  border-bottom: 2px solid #ef544d;
  align-items: center;
`;

const Search = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;

export default function Header() {
  return (
    <Headers>
      <SLink to="/">
        <Home>도서 Interpark</Home>
      </SLink>
      <Container>
        <SLink to="/search">
          <Search>도서 검색</Search>
          <ICon>
            <i className="fas fa-search"></i>
          </ICon>
        </SLink>
      </Container>
    </Headers>
  );
}
