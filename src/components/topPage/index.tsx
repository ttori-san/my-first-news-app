import React, { FC, useEffect, useState } from "react";
import { ArticleResponse, Articles } from "../../types"

export const TopPage: FC = () => {
	const [articles, setArticles] = useState<Articles>();
	useEffect(() => {
		const getArticles = async () => {
			const url =
				"https://newsapi.org/v2/everything?" +
				"q=Apple&" + //topic
				"from=2022-03-31&" +
				"sortBy=popularity&" +
				"apiKey=23e4d2b9c8ea464484776db364b71f7e";

			const req = new Request(url);
			const res = await fetch(req);
			const response: ArticleResponse = await res.json();
			const articles:Articles = response.articles;
			console.log(articles);
			setArticles(articles);
		};

		getArticles();
	}, []);
	let articleId: string[] = [];
	let articleTitles: string[] = [];
	let articleUrls: string[] = [];
	let articleImageUrls: string[] = [];
	if (articles) {
		articleTitles = articles.map((article) => article.title);
		articleUrls = articles.map((article) => article.url);
		articleImageUrls = articles.map((article) => article.urlToImage);
	}

	return (
		<>
			<h1>Hello, from TopPage</h1>
			<div>
				{articleTitles.map((title) => title)}
				{articleImageUrls.map((imageUrl) => (
					<img src={imageUrl}></img>
				))}
				Here's a articles view
			</div>
         
		</>
	);
};
