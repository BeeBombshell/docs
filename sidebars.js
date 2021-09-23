/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // Collapsed Version
  // someSidebar: {
  //   "Getting Started": ["home", "install", "faq"],
  //   "How To": ["how-to/create-table"],
  // },

  someSidebar: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      items: ["introduction", "install"],
    },
    {
      type: "category",
      label: "How To - Guides",
      collapsed: true,
      items: [
        "how-to/create-table",
        "how-to/create-column",
        "how-to/add-row",
        "how-to/filter-and-sort",
      ],
    },
    {
      type: "category",
      label: "Community",
      collapsed: false,
      items: ["community/contributing", "community/faqs"],
    },
    {
      type: "category",
      label: "Field Types",
      collapsed: true,
      items: ["field-types/connect-table"],
    },
    {
      type: "category",
      label: "Extensions",
      collapsed: true,
      items: ["extensions/algolia-index"],
    },
  ],
};
