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

const array = {
  sortBy,
};

/**
 *
 * @param {string} string
 */
function toSlug(string) {
  const accents = ["á", "é", "í", "ó", "ú", "ü"];
  const vocals = ["a", "e", "i", "o", "u", "u"];
  let parsedStrings = string;
   // transform vocals
   accents.forEach((accent, i) => {
    if (parsedStrings.indexOf(accent) > -1)
      parsedStrings = parsedStrings.replaceAll(accent, vocals[i]);
  });

  parsedStrings = parsedStrings
    .toLowerCase()
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

  return parsedStrings;
}

const browser = {
  getCookie,
  scrollTo,
  createCookie,
  deleteCookie,
  getUserLanguage,
  validation,
  parseQueries,

};

module.exports = { array, browser, toSlug };
