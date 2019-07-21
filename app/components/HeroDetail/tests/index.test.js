import React from 'react';
import { mount } from 'enzyme';

import HeroDetail from '../index';

describe('<HeroDetail />', () => {
  it('should render an error', () => {
    const renderedComponent = mount(<HeroDetail />);
    const content = <div><p>Error loading hero detail</p></div>;
    expect(renderedComponent.contains(content)).toBe(true);
  });

  it('should render the HeroDetail', () => {
    const renderedComponent = mount(
      <HeroDetail
        id={1}
        name="Mariano Rajoy Brey"
        thumbnail="https://st-listas.20minutos.es/images/2012-04/328417/3499469_640px.jpg?1337178623"
        age={64}
        weight={176.3345}
        height={80.45453}
        hairColor="Pink"
        professions={['Politician', 'Runner', 'Swimmer']}
        friends={['Soraya Saez de Santamaría', 'Francisco Correa', 'Esperanza Aguirre', 'Jose María Aznar']}
      />
    );

    const content = <div><p>Error loading hero detail</p></div>;
    expect(renderedComponent.contains(content)).toBe(false);
  });

  it("should render the HeroDetail, using id 0 (it's a falsy)", () => {
    const renderedComponent = mount(
      <HeroDetail
        id={0}
        name="Mariano Rajoy Brey"
        thumbnail="https://st-listas.20minutos.es/images/2012-04/328417/3499469_640px.jpg?1337178623"
        age={64}
        weight={176.3345}
        height={80.45453}
        hairColor="Pink"
        professions={['Politician', 'Runner', 'Swimmer']}
        friends={['Soraya Saez de Santamaría', 'Francisco Correa', 'Esperanza Aguirre', 'Jose María Aznar']}
      />
    );

    const content = <div><p>Error loading hero detail</p></div>;
    expect(renderedComponent.contains(content)).toBe(false);
  });
});
