const movieList = [
  {
    id: "1",
    title: "Star Wars: The Last Jedi",
    year: "2017",
    director: "Rian Johnson",
    genres: ["Action", "Fantasy", "Adventure"],
    lead: "Daisy Ridley",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711",
    linkIMDB: "http://www.imdb.com/title/tt2527336/"
  },
  {
    id: "2",
    title: "Black Swan",
    year: "2010",
    director: "Darren Aronofsky",
    genres: ["Drama", "Thriller"],
    lead: "Natalie Portman",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    linkIMDB: "http://www.imdb.com/title/tt0947798/"
  },
  {
    id: "3",
    title: "Harry Potter and the Prisoner of Azkaban",
    year: "2004",
    director: "Alfonso Cuaron",
    genres: ["Adventure", "Family", "Fantasy"],
    lead: "Daniel Radcliffe",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SY1000_CR0,0,676,1000_AL_.jpg",
    linkIMDB: "http://www.imdb.com/title/tt0304141/?ref_=nv_sr_1"
  },
  {
    id: "4",
    title: "Now You See Me",
    year: "2013",
    director: "Louis Leterrier",
    genres: ["Crime", "Mystery", "Thriller"],
    lead: "Jesse Eisenberg",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SY1000_CR0,0,642,1000_AL_.jpg",
    linkIMDB: "http://www.imdb.com/title/tt1670345/?ref_=nv_sr_2"
  },
  {
    id: "5",
    title: "Justice League",
    year: "2017",
    director: "Zack Snyder",
    genres: ["Action", "Adventure", "Fantasy"],
    lead: "Ben Affleck",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYWVhZjZkYTItOGIwYS00NmRkLWJlYjctMWM0ZjFmMDU4ZjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg",
    linkIMDB: "http://www.imdb.com/title/tt0974015/?ref_=nv_sr_1"
  },
  {
    id: "6",
    title: "The Conjuring",
    year: "2013",
    director: "James Wan",
    genres: ["Horror", "Mystery", "Thriller"],
    lead: "Patrick Wilson",
    image:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    linkIMDB: "http://www.imdb.com/title/tt1457767/?ref_=nv_sr_1"
  }
];



const getAll = () => movieList;

const getOne = id => movieList.find(movie => movie.id === id);

const getGenres = () =>
  movieList
    // getting the genre array for each movie
    .map(movie => movie.genres)
    // reducing all the genres arrays into a single array
    .reduce((genreList, genres) => [...genreList, ...genres])
    // removing duplicate genres (by keeping only the first instance of each genre)
    .filter((genre, index, genreList) => genreList.indexOf(genre) === index);

const getMoviesByGenre = genre =>
  movieList.filter(movie => movie.genres.includes(genre));

export default {
  getOne,
  getAll,
  getGenres,
  getMoviesByGenre
};
