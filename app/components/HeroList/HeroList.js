import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import styled from 'styled-components';
import DragScroll from 'react-dragscroll';

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
const StyledLi = styled.li`
  background: ${props => props.isPair ? '#FFFFFF' : '#A9A9A9' };
`;

const HeroListItem = ({ hero, isPair, onClickItem }) => <StyledLi isPair={isPair} onClick={ () => onClickItem(hero) }>{hero.name}</StyledLi>;

HeroListItem.propTypes = {
  hero: PropTypes.object,
  isPair: PropTypes.bool,
  onClickItem: PropTypes.func,
};

const Wrapper = styled.div`
  width: 100%;
`;

const HeroList = ({ heroes, onClickItem }) => (
  <DragScroll height={"80vh"} width={"100%"}>
    <Wrapper id="HeroList">
      {heroes && heroes.length ? (
        <StyledUl>
          {heroes.map((hero, index) => <HeroListItem key={`HeroListItem_${hero.id}`} isPair={(index % 2 === 0)} hero={hero} onClickItem={onClickItem}/>)}
        </StyledUl>
      ) : (
        <div>
          <p>Error loading hero list</p>
          <h3>heroes</h3>
          <p>--- {JSON.stringify(heroes)} ---</p>
        </div>
      )}
    </Wrapper>
  </DragScroll>
);

HeroList.propTypes = {
  heroes: PropTypes.array,
  onClickItem: PropTypes.func,
};

export default HeroList;
