var express = require('express');
var router = express.Router();

router.get('/objects', function(req, res, next) {
    res.send({objects:['Object from server #1', 'Object from server #2']});
});
module.exports = router;
