'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

/**
 * Get awesome things
 */
exports.people = function(req, res) {
    var people = [
        {'name': 'Matt', 'detail': 'Trains to kick people in the dome piece.', isHippie: false},
        {'name': 'Ben', 'detail': 'Can speak some English but is fluent in Bengenese', isHippie: false},
        {'name': 'Greg', 'detail': 'Rarely has opinions on trivial topics such as bracket placement.', isHippie: true}
    ];
    res.json(people);
};