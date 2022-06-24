import React from 'react'
import Post from './Post'

const posts = [
    {
        id: 1,
        img: 'https://links.papareact.com/3ke',
        category: '✍🏼Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarthak Kamra',
        views: '1.4k views'
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post=>{
            return <Post key={post.id} id={post.id} img={post.img} category={post.category} title={post.title} desc={post.desc} userimg={userimg} username={post.username} views={post.views}  />
        })}
    </div>
  )
}

export default Posts