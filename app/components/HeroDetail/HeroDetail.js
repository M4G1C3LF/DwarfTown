import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DragScroll from 'react-dragscroll';
import './style.scss';

const DetailItem = ({ label, value, unit }) => (
  <DetailItemWrapper>
    <ItemLabel>{label}: </ItemLabel>
    <ItemValue>
      {value} {unit && unit}
    </ItemValue>
  </DetailItemWrapper>
);

DetailItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

const DetailList = ({ label, values }) => (
  <DetailListWrapper>
    <h4>{label} </h4>
    {values.length ? (
      <ul>
        {/* eslint-disable react/no-array-index-key */}
        {values.map((value, index) => (
          <li key={`${label}_${index}`}>{value}</li>
        ))}
      </ul>
    ) : (
      <p>Empty List</p>
    )}
  </DetailListWrapper>
);

DetailList.propTypes = {
  label: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
};

const DetailListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const DetailTable = styled.table`
  margin-left: auto;
  margin-right: auto;
`;

const DetailItemWrapper = styled.tr`
  width: 80%;
`;

const ItemLabel = styled.td`
  text-align: right;
  font-weight: bold;
`;
const ItemValue = styled.td`
  text-align: left;
  padding-left: 10px;
`;
const Wrapper = styled.div`
  overflow-y: auto;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const ListSection = styled.div`
  display: flex;
`;
const HeroDetail = ({
  id,
  name,
  thumbnail,
  age,
  weight,
  height,
  hairColor,
  professions,
  friends,
}) => (
  <DragScroll height={'60vh'} width={'100%'}>
    <Wrapper>
      {(id || id === 0) && name && age && weight && height && hairColor ? (
        <div id={`heroDetail_${id}`}>
          <Image src={thumbnail} alt={`${name}'s thumbnail`} />
          <div>
            <DetailTable>
              <DetailItem label="Name" value={name} />
              <DetailItem label="Age" unit="years" value={age.toString()} />
              <DetailItem
                label="Weight"
                unit="kgs."
                value={weight.toFixed(2).toString()}
              />
              <DetailItem
                label="Height"
                unit="cms."
                value={height.toFixed(2).toString()}
              />
              <DetailItem label="Hair Color" value={hairColor} />
            </DetailTable>
          </div>
          <ListSection>
            {professions && (
              <DetailList label="Professions" values={professions} />
            )}
            {friends && <DetailList label="Friends" values={friends} />}
          </ListSection>
        </div>
      ) : (
        <div>
          <p>Error loading hero detail</p>
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
  friends: PropTypes.arrayOf(PropTypes.string),
};

export default HeroDetail;
