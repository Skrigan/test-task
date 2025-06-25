import { datatable_data, list_data } from "./data.js"

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
      margin: 10,
      cols: [
        { view: "button", value: "Add new", css: "webix_primary" },
        { view: "button", value: "Clear" },
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
