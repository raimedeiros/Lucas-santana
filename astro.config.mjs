// @ts-check
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Com domínio próprio (public/CNAME), o site fica na raiz.
// Sem ele, o GitHub Pages serve em raimedeiros.github.io/Lucas-santana/.
const temDominio = existsSync('./public/CNAME');

export default defineConfig({
  site: temDominio ? 'https://lucasreumatologista.com' : 'https://raimedeiros.github.io',
  base: process.env.BASE_PATH ?? (temDominio ? '/' : '/Lucas-santana'),
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
});
