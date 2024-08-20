import React from 'react'
import blogs from './blogs.json'

const Blog = () => {
    
    const firstBlogs = blogs[0]

  return (
    <div>
        <h1 className='text-5xl font-bold'>{firstBlogs.name}</h1>
        <h1 className='text-3xl font-bold mt-2'>{firstBlogs.title}</h1>
        <p className='mt-2'>{firstBlogs.content}</p>
    </div>
  )
}

export default Blog
