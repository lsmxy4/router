import React from 'react'
import TodoEditor from '../component/TodoEditor'
import TodoList from '../component/TodoList'

const Todolist = () => {
  return (
    <section>
        <TodoEditor/>
      <TodoList />
    </section>
  )
}

export default Todolist