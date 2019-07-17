import React from 'react';
import './style.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 10vh;
`;

const Footer = () => (
  <Wrapper>
    <section>2019 - Sergio Balaguer Carmona</section>
  </Wrapper>
);

export default Footer;
