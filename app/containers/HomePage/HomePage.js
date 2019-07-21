/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import HeroDetail from 'components/HeroDetail';
import HeroList from 'components/HeroList';
// import HeroListMock from 'components/HeroList/mock';
import Grid from '@material-ui/core/Grid';
import { filterByName, filterByProfession, getProfessions } from 'utils/filteringTools';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.selectHero = this.selectHero.bind(this);
  }

  /**
   * when initial state username is not null, submit the form to load repos
   */

  state = {
    selectedHero: null,
    filter: {
      name: '',
      profession: '',
    }
  }

  componentDidMount() {
    const { onLoadPage } = this.props;
    onLoadPage();
  }

  selectHero(hero) {
    this.setState({ selectedHero: hero });
    document.getElementById('heroDetailWrapper').scrollIntoView();
  }

  render() {
    const { town } = this.props;

    const { selectedHero, filter } = this.state;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {town && town.length
            && (
              <div>
                <span>Name: <input value={filter.name} onChange={(e) => this.setState({ filter: { ...filter, name: e.target.value } })} /> </span><br />
                <span>
                  Professions: 
                  <select onChange={(e) => this.setState({ filter: { ...filter, profession: e.target.value }}) }>
                    {getProfessions(town).map((job) => <option key={`Profession_${job}`} value={job}>{job}</option>)}
                  </select>
                </span>
                <HeroList heroes={filterByProfession(filterByName(town, filter.name), filter.profession )} onClickItem={this.selectHero} />
              </div>
            )
          }
        </Grid>
        <Grid id='heroDetailWrapper' item xs={12} sm={6}>
          {selectedHero
            && (
              <HeroDetail
                id={selectedHero.id}
                name={selectedHero.name}
                thumbnail={selectedHero.thumbnail}
                age={selectedHero.age}
                weight={selectedHero.weight}
                height={selectedHero.height}
                hairColor={selectedHero.hair_color}
                professions={selectedHero.professions}
                friends={selectedHero.friends}
              />
              
            )
          }
        </Grid>
      </Grid>
    );
  }
}

HomePage.propTypes = {
  town: PropTypes.object,
  onLoadPage: PropTypes.func,
};
