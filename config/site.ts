export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: 'MangaStore',
	description: 'Los mejores mangas!.',
	navItems: [
		{
			label: 'Inicio',
			href: '/',
		},
		{
			label: 'Colección',
			href: '/collection',
		},
		{
			label: 'Contacto',
			href: '/contact',
		},
		{
			label: 'Acerca de',
			href: '/about',
		},
	],
	navMenuItems: [
		{
			label: 'Inicio',
			href: '/',
		},
		{
			label: 'Colección',
			href: '/collection',
		},
		{
			label: 'Contacto',
			href: '/contact',
		},
		{
			label: 'Acerca de',
			href: '/about',
		},
	],
	links: {
		github: 'https://github.com/nextui-org/nextui',
		twitter: 'https://twitter.com/getnextui',
		docs: 'https://nextui-docs-v2.vercel.app',
		discord: 'https://discord.gg/9b6yyZKmH4',
		sponsor: 'https://patreon.com/jrgarciadev',
	},
};
