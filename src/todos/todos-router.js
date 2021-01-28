const express = require('express')
const path = require('path')
const TodosService = require('./todos-service')

const todosRouter = express.Router()
const jsonBodyParser = express.json()

todosRouter
    .route('/')
    .get(getTodos)
    .post(jsonBodyParser, createTodo)

async function getTodos(req,res,next) {
    try {
        const todos = await TodosService.getTodos(
            req.app.get('db')
        )

        res.todos = await res.json(todos.map(TodosService.serializeTodo))

        next()
    } catch (error) {
        next(error)
    }
}

async function createTodo(req, res, next) {
    try {
        const newTodo = { title, category }

        for (const [key, value] of Object.entries(newTodo))
            if (value == null)
            return res.status(400).json({
                error: { message: `Missing '${key}' in request body`}
            })
            

        const todo = await TodosService.insertTodo(
            req.app.get('db'),
            newTodo
        )

        await res
            .status(201)
            .location(path.posix.join(req.originalURL, `/${todo.id}`))
            .json(TodosService.serializeTodo(todo))

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = todosRouter