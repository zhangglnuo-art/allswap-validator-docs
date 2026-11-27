import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AllSwap MultiChain Validator',
  tagline: 'Offline 46+ Chain Address Checksum, Memo/Tag & Anti-Poisoning Documentation',
  url: 'https://zhangglnuo-art.github.io',
  baseUrl: '/allswap-validator-docs/',
  organizationName: 'zhangglnuo-art',
  projectName: 'allswap-validator-docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AllSwap Validator',
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation'},
        {href: 'https://allswap.io/tools/address-validator', label: 'Online Tool', position: 'left'},
        {href: 'https://allswap.io', label: 'AllSwap.io', position: 'right'},
        {href: 'https://github.com/zhangglnuo-art/multichain-memo-address-validator', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Architecture Overview', to: '/docs/intro'},
            {label: 'Supported 46+ Chains', to: '/docs/supported-chains'},
            {label: 'Address-Poisoning Defense', to: '/docs/address-poisoning'},
          ],
        },
        {
          title: 'AllSwap Ecosystem',
          items: [
            {label: 'Interactive Address Validator', href: 'https://allswap.io/tools/address-validator'},
            {label: 'AllSwap Cross-Chain Router', href: 'https://allswap.io'},
            {label: 'Developer Docs', href: 'https://allswap.io/docs'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'X (Twitter)', href: 'https://x.com/allswapio'},
            {label: 'Open-Source CLI (MIT)', href: 'https://github.com/zhangglnuo-art/multichain-memo-address-validator'},
          ],
        },
      ],
      copyright: 'Copyright © 2026 AllSwap Security Labs. Built with Docusaurus.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
