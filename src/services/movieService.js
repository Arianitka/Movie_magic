const Movie = require('../models/Movie');


  exports.getAll = () => {
    const movies =  Movie.find();

    return movies;
  };

  exports.search = async (title,genre,year) => {
    let result = await Movie.find().lean()

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))
      }
    
      if (genre) {
        result = result.filter(movie => movie.genretoLowerCase() === genre.toLowerCase())
      }
    
      if (year) {
        result = result.filter(movie => movie.year === year)
      }

      return result;
  };

 

  
  exports.getOne = (movieId) =>  Movie.findById(movieId);
  
  exports.create = (movieData) => Movie.create(movieData);
  
  exports.attach = async (movieId, castId) => {
    const movie = await this.getOne(movieId);

    movie.casts.push(castId);

    return movie.save();
  }

