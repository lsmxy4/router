import React from 'react'
import { useParams } from 'react-router-dom'

const TodolistDetail = () => {
  const {id} = useParams()
  
    return (
      <section>{id}의 TodolistDetail페이지</section>
    )
}

export default TodolistDetail