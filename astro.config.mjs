// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://xoxxo18.github.io',
	base: '/laocai-doc/',
	integrations: [
		starlight({
			title: 'Laocai Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/validname1233/laocai' }],
			sidebar: [
				{
					label: '快速开始',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '目录导航', slug: 'quickstart/navigation' },
						{ label: '什么是牢财QQ机器人', slug: 'quickstart/introduction' },
					],
				},
				{
					label: '使用',
					items: [
						{ label: '跑团', slug: 'trpg/example' },
						{ label: '宝可梦对战', slug: 'pokemon/example' },
					]
				},
			],
		}),
	],
});
