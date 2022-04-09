export type ArticleResponse = {
	status: string;
	totalResults: number;
	articles: [
		{
			source: {
				id: number;
				name: string;
			};
			author: string;
			title: string;
			description: string;
			url: string;
			urlToImage: string;
			publishedAt: string;
			content: string;
		}
	];
};

export type Articles = {
	source: {
		id: number;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}[];
