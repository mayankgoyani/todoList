const service = {};
const toDo = require('../models/todo.model');

service.getTaskList = (req, res, next) => {
    toDo.find({}, (err, todoList) => {
        res.send(todoList);
    });
    // res.send({ "getTaskList": "xyz" });
    // console.log('getTaskList');
}

service.addTaskList = async (req, res, send) => {
    const todo = await new toDo({
        taskName: req.body.taskName
    });
    const response = await todo.save();
    res.send(response);
}

service.updateTask = async (req, res, send) => {

    response = await toDo.updateOne({ _id: req.body.id }, {
        $set: {
            taskCompleted: req.body.taskCompleted
        }
    });
    // const todo = await new toDo({
    //     taskName: req.body.taskName
    // });
    // const response = await todo.save();
    res.send(response);
}


module.exports = service;
