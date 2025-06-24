const datatable_data = [
  { id: 1, title: "The Shawshank Redemption", year: 1994, votes: 678790, rating: 9.2, rank: 1},
  { id: 2, title: "The Godfather", year: 1972, votes: 511495, rating: 9.2, rank: 2},
  { id: 3, title: "The Godfather: Part II", year: 1974, votes: 319352, rating: 9.0, rank: 3},
  { id: 4, title: "The Good, the Bad and the Ugly", year: 1966, votes: 213030, rating: 8.9, rank: 4},
  { id: 5, title: "My Fair Lady", year: 1964, votes: 533848, rating: 8.9, rank: 5},
  { id: 6, title: "12 Angry Men", year: 1957, votes: 164558, rating: 8.9, rank: 6},
];

const list_data = [
  { id: 1, value: "Dashboard" },
  { id: 2, value: "Users" },
  { id: 3, value: "Products"},
  { id: 4, value: "Locations"},
]

const header = {
  view: "toolbar",
  css: "webix_dark",
  padding: { top: 0, bottom: 0, left: 10, right: 10, },
  elements: [
    { view: "label", label: "My App" },
    {
      view: "button",
      type: "icon",
      icon: "mdi mdi-account",
      label: "Profile",
      css: "webix_transparent",
      width: 90,
    },
  ],
};

const leftCol = {
  css: "left-col",
  rows: [
    { view: "list", width: 150, data: list_data, scroll: "auto" },
    {
      view: "template",
      css: "connection_status",
      template: "✔ Connected",
      height: 30,
    },
  ],
};

const dataTable = {
  view: "datatable",
  autoConfig: true,
  scroll: "y",
  data: datatable_data,
};

const form = {
  view: "form",
  width: 250,
  elements: [
    { template: "EDIT FILMS", type: "section" },
    { view: "text", name: "title", label: "Title" },
    { view: "text", name: "year", label: "Year" },
    { view: "text", name: "rating", label: "Rating" },
    { view: "text", name: "votes", label: "Votes" },
    {
      cols: [
        { view: "button", value: "Add new", width: 105, css: "webix_primary" },
        {},
        { view: "button", value: "Clear", width: 105 },
      ],
    },
    {},
  ],
};

const footer = {
  view: "template",
  height: 30,
  template: `The software is provided by <a href="https://webix.com" target="_blank">https://webix.com</a>. All rights reserved (c)`,
  css: "footer",
};

webix.ui({
  rows: [
    header,
    {
      cols: [leftCol, { view:"resizer" }, dataTable, form],
    },
    footer,
  ],
});
