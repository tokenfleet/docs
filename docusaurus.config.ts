import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Token Fleet',
  tagline: 'Democratizing Luxury Car Ownership Through Blockchain Technology',
  favicon: 'img/favicon.ico',

  url: 'https://docs.tokenfleet.io',
  baseUrl: '/',

  organizationName: 'tokenfleet',
  projectName: 'docs',

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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/tokenfleet/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/tokenfleet/docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Token Fleet',
      logo: {
        alt: 'Token Fleet Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/tokenfleet/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Investment Risks',
              to: '/legal/investment_risks',
            },
            {
              label: 'KYC/AML Procedures',
              to: '/security_and_compliances/kyc_aml',
            },
            {
              label: 'Contact and Support',
              to: '/contact_us',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/tokenfleet_io',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/tokenfleet_io',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/profile.php?id=61568084092915',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/tokenfleet',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/tokenfleet',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCOjJJAKCuCJgOmKHHRh_4ZQ',
            },
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/tokenfleet',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Token Fleet, by Reliable Route.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;