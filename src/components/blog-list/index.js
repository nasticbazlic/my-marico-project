import React, { useEffect, useState } from "react";

import './blog-list.css'

function BlogList() {
	const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
		const data = await response.json();
		setPosts(data);

		// fetch('https://api.chucknorris.io/jokes/random')
		// 	.then((response) => response.json())
		// 	.then((data) => setPosts(data))
  };

	useEffect(() => {
		fetchPost()
	}, []);

	console.log(posts);

  return (
			<div className='blog-list'>
				{posts?.map((post) => {
					return (
								<div key={post?.id} className='blog-list-item'>
									<img src={post?.thumbnailUrl} alt='img_blog' />
								<div className='blog-list-item-title'>
												{post?.title}
									</div>
								</div>
						)
					})}
			</div>
	)
} 

export default BlogList;

