const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req,res) => {

    res.render('create')
});

router.post('/create', async (req,res) => {
    const newMovie = req.body;
    
    try {
        await movieService.create(newMovie) 
        res.redirect('/')

    } catch(err) {
        console.log(err);
        res.redirect('/create');
    } 
});

router.get('/movies/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    const casts = await castService.getByIds(movie.casts).lean()

    movie.rating = new Array(Number(movie.rating)).fill(true)
;
    res.render('details', {movie, casts})
});

router.get('movies/:movieId', async (req, res) =>{
    const movie = await movieService.getOne(req.params.movieId).lean()
    const casts = await castService.getall().lean();

    res.render('movie/attach', {...movie,casts})
});

router.post('movies/:movieId/attach', async (req, res,) => {
    const castId = req.body.cast;
    const movie =  await movieService.getOne(req.params.movieId);
    

    movie.casts.push(castId);

    await  movie.save()
    res.redirect(`/movies/${req.params.movieId}/attach`);
});
module.exports = router

