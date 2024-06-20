const Cast = require('../models/Cast');
const Movie = require('../models/Movie');

exports.getall = () => Cast.find()

exports.create = (castData) => Cast.create(castData);
exports.getByIds = (castIds) => {
    const casts = Cast.find({_id: {$in: castIds}});

    return casts;
}