export const SITE = {
	title: 'NFTEarth',
	description: 'NFTEarth Roadmap',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://assets.coingecko.com/coins/images/29116/small/20230223_224134.jpg?1677224110',
		alt:
			'NFTEarth',
	},
	twitter: 'NFTEarth_L2',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/NFTEarth`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/nftearth`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Section Header': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Page 2', link: 'en/page-2' },
		],
		'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
	},
};
