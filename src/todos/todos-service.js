const xss = require('xss')

const TodosService = {
    getTodos(db) {
        return db
            .from('todos AS todos')
            .select('*')
    },

    insertTodo(db, newTodo) {
        return db
            .insert(newTodo)
            .into('todos')
            .returning('*')
            .then(([todo]) => todo)
    },

    getById(db, id) {
        return db
            .from('todos AS todos')
            .select('*')
            .where('todos.id', id)
            .first()
    },

    serializeTodo(todo) {
        return {
            id: todo.id,
            title: xss(todo.title),
            completed: todo.completed,
            category: todo.category,
        }
    }
}

module.exports = TodosService