import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = styled.div`
  padding: 15px 0px;
  background-color: #ef544d;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Item = styled.li`
  color: white;
  font-weight: 600;
`;

const SLink = styled(Link)``;

export default () => (
  <Category>
    <List>
      <Item>
        <SLink to="/bestseller">베스트셀러</SLink>
      </Item>
      <Item>
        <SLink to="/recommend">미디어추천</SLink>
      </Item>
      <Item>
        <SLink to="/new">신간</SLink>
      </Item>
    </List>
  </Category>
);
