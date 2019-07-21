import React from 'react';
import { mount } from 'enzyme';
import HeroListMock from 'components/HeroList/mock.json';
import HeroList from '../index';


describe('<HeroDetail />', () => {
  it('should render an error', () => {
    const renderedComponent = mount(<HeroList />);
    const content = <div><p>Error loading hero list</p></div>;
    expect(renderedComponent.contains(content)).toBe(true);
  });

  it('should render the HeroDetail', () => {
    const renderedComponent = mount(
      <HeroList heroes={HeroListMock.Brastlewark} />
    );

    const content = <div><p>Error loading hero list</p></div>;
    expect(renderedComponent.contains(content)).toBe(false);
  });
});
