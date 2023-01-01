const { sortBy } = require("./array");
const {
  getCookie,
  scrollTo,
  createCookie,
  deleteCookie,
  getUserLanguage,
} = require("./browser");

const Array = {
  sortBy,
};

const Browser = {
  getCookie,
  scrollTo,
  createCookie,
  deleteCookie,
  getUserLanguage,
};

module.exports = { Array, Browser };
