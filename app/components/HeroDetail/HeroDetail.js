import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DragScroll from 'react-dragscroll';
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
    {values.length ? (
      <ul>
        {/* eslint-disable react/no-array-index-key */}
        {values.map((value, index) => <li key={`${label}_${index}`}>{value}</li>)}
      </ul>
    ) : (
      <p>Empty List</p>
    )}
  </div>
);

DetailList.propTypes = {
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
};

const Wrapper = styled.div`
  overflow-y: auto;
`;

const Image = styled.img`
  max-width: 300px;
  max-height: 300px;
  border: '5px solid red';
`;

const HeroDetail = ({
  id, name, thumbnail, age, weight, height, hairColor, professions, friends
}) => (
  <DragScroll height={"80vh"} width={"100%"}>
    <Wrapper>
      {(id || id === 0) && name && age && weight && height && hairColor ? (
        <div id={`heroDetail_${id}`}>
          <Image src={thumbnail} alt={`${name}'s thumbnail`} />
          <DetailItem label="Name" value={name} />
          <DetailItem label="Age" value={age.toString()} />
          <DetailItem label="Weight" value={weight.toFixed(2).toString()} />
          <DetailItem label="Height" value={height.toFixed(2).toString()} />
          <DetailItem label="Hair Color" value={hairColor} />
          {professions && <DetailList label="Professions" values={professions} />}
          {friends && <DetailList label="Friends" values={friends} />}
        </div>
      ) : (
        <div>
          <p>Error loading hero detail</p>
          <h4>Props</h4>
          <p>id: {id}</p>
          <p>name: {name}</p>
          <p>thumbnail: {thumbnail}</p>
          <p>iaged: {age}</p>
          <p>weight: {weight}</p>
          <p>height: {height}</p>
          <p>hairColor: {hairColor}</p>
          <p>professions: {professions}</p>
          <p>friends: {friends}</p>
        </div>
      )}
    </Wrapper>
  </DragScroll>
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
