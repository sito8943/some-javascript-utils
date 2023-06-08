const { sortBy } = require("./array");
const {
  getCookie,
  scrollTo,
  createCookie,
  deleteCookie,
  getUserLanguage,
  validation,
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
};

module.exports = { Array, Browser };
