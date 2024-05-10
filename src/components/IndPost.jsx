import React from 'react'

export default function IndPost({post}) {
  return (
    <article className='border-bottom p-4 m-4'>
        
        <h3 className='posttitle'>{post.title}</h3>
            <p className='postauthor'>Author: {post.author.username}</p>
            <p className='postbody'>{post.body}</p>
    </article>
  )
}
