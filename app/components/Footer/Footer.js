import React from 'react';
import './style.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const Footer = () => (
  <Wrapper>
    <footer>2019 - Sergio Balaguer Carmona</footer>
  </Wrapper>
);

export default Footer;
