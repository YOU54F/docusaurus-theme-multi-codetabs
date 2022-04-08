// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'docusaurus-tab-generator',
  tagline: 'Dinosaurs are cool',
  url: 'https://docusaurus-tab-generator.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'you54f', // Usually your GitHub org/user name.
  projectName: 'docusaurus-tab-generator', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/you54f/docusaurus-tab-generator',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: ["@you54f/theme-github-codeblock"], // switch to @saucelabs/theme-github-codeblock when merged https://github.com/saucelabs/docusaurus-theme-github-codeblock/pull/19

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'you54f/docusaurus-tab-generator',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Examples',
          },
          {
            href: 'https://github.com/you54f/docusaurus-tab-generator',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Examples',
                to: '/docs/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // default list https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
      // additional supported langs https://prismjs.com/#supported-languages
      additionalLanguages: [
        "powershell",
        "ruby",
        "csharp",
        "java",
        "docker",
        "groovy",
        "scala"
      ],
      },
    }),
};

module.exports = config;
