const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @typedef {import("@docusaurus/types").Config} Config 
 */

/**
 * @type {Config}
 */
const config = {
  title: "SVGO",
  tagline: "A Node.js library and command-line application to optimize vectors.",
  favicon: "img/favicon.ico",
  url: "https://svgojs.org",
  baseUrl: "/",
  organizationName: "SethFalco",
  projectName: "svgo.dev",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en"
    ],
  },
  plugins: [
    [
      "@docusaurus/theme-classic",
      {
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    [
      "@docusaurus/plugin-content-pages",
      {
        path: "src/pages",
        routeBasePath: "/"
      }
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        path: ".svgo/docs",
        breadcrumbs: true,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: ({ docPath }) => `https://github.com/svg/svgo/tree/main/docs/${docPath}`,
      }
    ],
    [
      "@docusaurus/plugin-sitemap",
      {
        filename: "sitemap.xml",
        ignorePatterns: [
          "/.well-known/**"
        ]
      }
    ]
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: false,
        language: "en",
        hashed: true,
        searchBarPosition: "right"
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "SVGO",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        target: "_self",
        height: 112,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "docsSidebar",
          label: "Documentation",
        },
        {
          href: "https://github.com/svg/svgo",
          position: "right",
          html: `<img alt="" src="https://img.shields.io/github/stars/svg/svgo?style=social">`,
          className: 'github-shield',
          'aria-label': 'GitHub repository'
        }
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/svgo",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/z8jX8NYxrE",
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/svg/svgo",
            },
            {
              label: "Open Collective",
              href: "https://opencollective.com/svgo"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/svg/svgo/graphs/contributors">SVGO and Contributors</a><br>Source Code under MIT · Content and Assets under CC-BY-4.0`
    },
  }
};

module.exports = config;
