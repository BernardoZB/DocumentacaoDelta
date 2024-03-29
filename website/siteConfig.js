/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true,
  },
];

const siteConfig = {
  title: " Documentação da DeltaTrader", // Title for your website.
  tagline: "Encontre informações sobre nossos produtos",
  url: "https://docs.deltatrader.com.br/", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "DeltaTrader Documentação",
  organizationName: "DeltaTrader",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'
  scrollToTop: true,

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "doc1", label: "MT5" },
    { doc: "doc4", label: "Zeus" },
    { doc: "doc2", label: "Robôs" },
    { doc: "boletadelta", label: "Boleta" },
    { blog: true, label: "Artigos" },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/Logos_Docs-06.svg",
  favicon: "img/download.png",

  /* Colors for website */
  colors: {
    primaryColor: "#1B245B",
    secondaryColor: "#0C112B",
  },

  /* Custom fonts for website */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `© 2019 Delta Serviços Financeiros LTDA. Todos os direitos reservados`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "default",
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
  algolia: {
    apiKey: "my-api-key",
    indexName: "my-index-name",
    appId: "app-id", // Optional, if you run the DocSearch crawler on your own
    algoliaOptions: {}, // Optional, if provided by Algolia
    algoliaOptions: {},
  },
};

module.exports = siteConfig;
