var express = require('express');
var router = express.Router();
let todo = require('../services/todo.service');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.get('/getTaskList', todo.getTaskList);
router.post('/addTaskList', todo.addTaskList);
router.post('/updateTask', todo.updateTask);



module.exports = router;
