import React from 'react';
import Listing from './Listing';

class MovieBrowser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      movies: []
    };
    this.getMoviesList = this.getMoviesList.bind(this);
    this.getPopular20Movies = this.getPopular20Movies.bind(this);
    this.getTrending20Movies = this.getTrending20Movies.bind(this);
    this.getNewest20Movies = this.getNewest20Movies.bind(this);
    this.getHighRated20Movies = this.getHighRated20Movies.bind(this);
  }
  componentDidMount() {
    this.getMoviesList();
  }
  getMoviesList() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(
            {
              movies: result.results
            }
          )
        }
      )
  }

  getPopular20Movies() {
    const popular20 = this.state.movies.filter( movie => {
      
    });
  }

  getTrending20Movies() {

  }

  getNewest20Movies() {
    
  }

  getHighRated20Movies() {
    
  }
  render() {
    return(
      <div>
        <header className="App-header">
          <nav className="movies-header">
            <span className="logo">Discover</span>
            <ul className="movies-navigation-list">
              <li className="movies-navigation-list-item">Popular</li>
              <li className="movies-navigation-list-item">Trend</li>
              <li className="movies-navigation-list-item">Newest</li>
              <li className="movies-navigation-list-item">Top Rated</li>
            </ul>
          </nav>
        </header>
        <Listing movies={this.state.movies} />
      </div>
    );
  } 
}

export default MovieBrowser;