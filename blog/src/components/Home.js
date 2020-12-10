import React from 'react';
import '../App.css';

const Home = () => {
	return (
		<main className="blog-page">
			<p className="blog-head">Blogsida</p>
			<section className="blog-block">
				<a className="link" href="#">
					<section className="blog-link">
							<section className="left-column">
								<span className="blog-date">datum</span>
								<span className="blog-cat">kategori</span>
							</section>
						
							<h1 className="blog-text">text</h1>
					</section>
				</a>		
				<a className="link" href="#">
					<section className="blog-link">
							<section className="left-column">
								<span className="blog-date">datum</span>
								<span className="blog-cat">kategori</span>
							</section>
						
							<h1 className="blog-text">text</h1>
					</section>
				</a>		
			</section>		
		</main>
	);
};

export default Home; 