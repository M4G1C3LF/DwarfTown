import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const HeroListItem = ({ hero }) => <li>{hero.name}</li>;

HeroListItem.propTypes = {
  hero: PropTypes.object,
};

const HeroList = ({ heroes }) => (
  <div id="HeroList">
    {heroes && heroes.length ? (
      <ul>
        {heroes.map((hero) => <HeroListItem key={`HeroListItem_${hero.id}`} hero={hero} />)}

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
};

export default HeroList;
