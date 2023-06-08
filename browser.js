
/**
 * 
 * @param {string} string 
 * @param {string} storage 
 * @param {any} value 
 * @returns 
 */
const validation = (string, storage = "local", value = undefined) => {
  if (storage === "local") {
    if (
      localStorage.getItem(string) !== undefined &&
      localStorage.getItem(string) !== "undefined" &&
      localStorage.getItem(string) !== null
    ) {
      if (
        value === undefined ||
        (value !== undefined && localStorage.getItem(string) === value)
      )
        return true;
      return false;
    }
  } else if (storage === "session") {
    if (
      sessionStorage.getItem(string) !== undefined &&
      sessionStorage.getItem(string) !== "undefined" &&
      sessionStorage.getItem(string) !== null
    ) {
      if (
        value === undefined ||
        (value !== undefined && sessionStorage.getItem(string) === value)
      )
        return true;
      return false;
    }
  }
  return false;
};

/**
 *
 * @param {string} queries
 */
const parseQueries = (queries) => {
  const toReturn = {};
  const queryParams = queries.substring(1).split("&");
  queryParams.forEach((item) => {
    const [param, value] = item.split("=");
    toReturn[param] = value;
  });
  return toReturn;
};

/**
 *
 * @param {string} cookie
 * @returns
 */
const getUserLanguage = (cookie = "") => {
  if (getCookie(cookie) && cookie.length) return getCookie(cookie);
  else {
    let userLang = navigator.language || navigator.userLanguage;
    if (userLang.indexOf("en") < 0 && userLang.indexOf("es") < 0)
      userLang = "en-US";
    userLang = userLang.split("-")[0];
    if (userLang) {
      if (cookie.length) createCookie(cookie, 730, userLang);
      return userLang;
    }
  }
  return "en";
};

/**
 * Scroll to a target position, default the top of the page.
 * @param {number} [targetY=0] - The target top position to scroll to.
 * @param {number} [targetX=0] - The target left position to scroll to.
 * @param {Node} [dealer=window] - The element who triggers the scroll.
 * @param {string} [behavior="smooth"] - Scroll behavior
 */
const scrollTo = (
  targetY = 0,
  targetX = 0,
  dealer = window,
  behavior = "smooth"
) =>
  dealer.scroll({
    top: targetY,
    left: targetX,
    behavior: behavior,
  });

/**
 * Takes a name, expiration, and value, and creates a cookie with those values
 * @param {string} name - The name of the cookie
 * @param {any} days - number of days
 * @param {any} value - The value of the cookie.
 */
const createCookie = (name, days, value) => {
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "; expires=" + date.toUTCString();
  document.cookie = `${name}=${value || ""}${expires}";path=/`;
};

/**
 * Takes a cookie name as an argument and returns the value of that cookie
 * @param {string} cname - The name of the cookie you want to get.
 * @returns {any} The value of the cookie with the name cname.
 */
const getCookie = (cname) => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/**
 * Removes a cookie
 * @param {string} name
 */
const deleteCookie = (name) =>
  (document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);

module.exports = {
  getCookie,
  createCookie,
  deleteCookie,
  getUserLanguage,
  scrollTo,
  parseQueries,
  validation
};
