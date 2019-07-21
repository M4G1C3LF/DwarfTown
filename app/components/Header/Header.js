import React from 'react';
import './style.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <h1>Brastlewark</h1>
      </Wrapper>
    );
  }
}

export default Header;
