import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  position: absolute;
  margin-top: 150px;
`;

const GridContainer = styled.div`
  border-top: 1px solid #cec7be;
`;

const Grid = styled.div`
  padding: 20px 100px;
  display: grid;
  width: 100vw;
  justify-content: center;
  grid-template-columns: repeat(3, 280px);
  column-gap: 200px;
  row-gap: 100px;
`;

const Section = ({ children }) => (
  <Container>
    <GridContainer>
      <Grid>{children}</Grid>
    </GridContainer>
  </Container>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
