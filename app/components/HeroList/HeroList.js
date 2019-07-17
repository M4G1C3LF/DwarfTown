import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const HeroListItem = ({ hero, onClickItem }) => <li onClick={ () => onClickItem(hero) }>{hero.name}</li>;

HeroListItem.propTypes = {
  hero: PropTypes.object,
  onClickItem: PropTypes.func,
};

const HeroList = ({ heroes, onClickItem }) => (
  <div id="HeroList">
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
  </div>
);

HeroList.propTypes = {
  heroes: PropTypes.array,
  onClickItem: PropTypes.func,
};

export default HeroList;
