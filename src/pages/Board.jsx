import React from 'react'
import './styles/Board.css'
import { communityPosts } from '../data/community'

const Board = () => {
  return (
    <section className="board">
      <h1 className="board-title">COMMUNITY BOARD</h1>

      <div className="board-grid">
        {communityPosts.map(post => (
          <a
            key={post.id}
            href={`/board/${post.id}`}
            className="board-card"
          >
            <span className="card-number">{post.id}</span>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Board