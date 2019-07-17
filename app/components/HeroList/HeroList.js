import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import styled from 'styled-components';

const HeroListItem = ({ hero, onClickItem }) => <li onClick={ () => onClickItem(hero) }>{hero.name}</li>;

HeroListItem.propTypes = {
  hero: PropTypes.object,
  onClickItem: PropTypes.func,
};

const Wrapper = styled.div`
  width: 30vw;
  height: 80vh;
  overflow-y: auto;
`;

const HeroList = ({ heroes, onClickItem }) => (
  <Wrapper id="HeroList">
    {heroes && heroes.length ? (
      <ul>
        {heroes.map((hero) => <HeroListItem key={`HeroListItem_${hero.id}`} hero={hero} onClickItem={onClickItem}/>)}
      </ul>
    ) : (
      <div>
        <p>Error loading hero list</p>
        <h3>heroes</h3>
        <p>--- {JSON.stringify(heroes)} ---</p>
      </div>
    )}
  </Wrapper>
);

HeroList.propTypes = {
  heroes: PropTypes.array,
  onClickItem: PropTypes.func,
};

export default HeroList;
