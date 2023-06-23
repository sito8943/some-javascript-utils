const { sortBy } = require("./array");
const {
  getCookie,
  scrollTo,
  createCookie,
  deleteCookie,
  getUserLanguage,
  validation,
  parseQueries,
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
  validation,
  parseQueries,
};

module.exports = { Array, Browser };
