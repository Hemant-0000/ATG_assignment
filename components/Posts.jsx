import React from 'react'
import Post from './Post'

const posts = [
    {
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        category: '✍🏼 Article',
        title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarthak Kamra',
        views: '1.4k views'
    },
    {
        id: 2,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        category: '🔬 Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 3,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        category: '🔬 Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 4,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        category: '🔬 Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 5,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        category: '🔬 Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
    {
        id: 6,
        img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg',
        category: '🔬 Education',
        title: 'Tax Benefits for Investment under National Pension Scheme..',
        desc: 'I’ve worked in UX for the better part of a decade. F..',
        userimg: 'https://links.papareact.com/3ke',
        username: 'Sarah West',
        views: '4.8k views'
    },
]

function Posts() {
  return (
    <div>
        {posts.map(post=>{
            return <Post key={post.id} id={post.id} img={post.img} category={post.category} title={post.title} desc={post.desc} userimg={post.userimg} username={post.username} views={post.views}  />
        })}
    </div>
  )
}

export default Posts