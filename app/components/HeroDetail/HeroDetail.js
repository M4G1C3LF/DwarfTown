import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const DetailItem = ({ label, value }) => (
  <div>
    <span>{label}: </span> <span>{value}</span>
  </div>
);

DetailItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

const DetailList = ({ label, values }) => (
  <div>
    <h4>{label} </h4>
    <ul>
      {values.map((value, index) => <li key={`${label}_${index}`}>{value}</li>)}
    </ul>
  </div>
);

DetailList.propTypes = {
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
};

const HeroDetail = ({
  id, name, thumbnail, age, weight, height, hairColor, professions, friends
}) => (
  <div id={`heroDetail_${id}`}>
    <img src={thumbnail} alt={`${name}'s thumbnail`} />
    <DetailItem label="Name" value={name} />
    <DetailItem label="Age" value={age.toString()} />
    <DetailItem label="Weight" value={weight.toString()} />
    <DetailItem label="Height" value={height.toString()} />
    <DetailItem label="Hair Color" value={hairColor} />
    {professions && professions.length && <DetailList label="Professions" values={professions} />}
    {friends && friends.length && <DetailList label="Friends" values={friends} />}
  </div>
);

HeroDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  age: PropTypes.number,
  weight: PropTypes.number,
  height: PropTypes.number,
  hairColor: PropTypes.string,
  professions: PropTypes.arrayOf(PropTypes.string),
  friends: PropTypes.arrayOf(PropTypes.string)
};

export default HeroDetail;