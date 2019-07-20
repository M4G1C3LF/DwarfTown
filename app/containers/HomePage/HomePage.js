/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';
import HeroDetail from 'components/HeroDetail';
import HeroList from 'components/HeroList';
// import HeroListMock from 'components/HeroList/mock';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { filterByName } from 'utils/filteringTools' 
const Wrapper = styled.div`
  display: inline-flex;
`;
const HeroListWrapper = styled.div`
  float: left;
`;
const HeroDetailWrapper = styled.div`
  float: right;
`;

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
    filter: '',
  }

  componentDidMount() {
    const { username, onSubmitForm, onLoadPage } = this.props;

    onLoadPage();
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  selectHero(hero) {
    this.setState({ selectedHero: hero });
    document.getElementById("heroDetailWrapper").scrollIntoView();
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm, town
    } = this.props;

    const reposListProps = {
      loading,
      error,
      repos
    };

    const { selectedHero, filter } = this.state;
    
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          {town && town.length
            && (
              <div>
                <span>Filter: <input value={filter} onChange={(e) => this.setState({ filter: e.target.value })} /> </span>
                <HeroList heroes={filterByName(town, filter)} onClickItem={this.selectHero} />
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
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onLoadPage: PropTypes.func,
};
