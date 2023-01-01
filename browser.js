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
 * @param {number} [target=0] - The target position to scroll to.
 */
const scrollTo = (target = 0) =>
  window.scroll({
    top: target,
    left: 0,
    behavior: "smooth",
  });

/**
 * Takes a name, expiration, and value, and creates a cookie with those values
 * @param {string} name - The name of the cookie
 * @param {any} expiration - "2019-12-31 23:59:59"
 * @param {any} value - The value of the cookie.
 */
const createCookie = (name, expiration, value) => {
  let d = new Date();
  if (typeof expiration === "string") {
    const spaceSplit = expiration.split(" ");
    const dashSplit = spaceSplit[0].split("-");
    const colonSplit = spaceSplit[1].split(":");
    d = new Date(
      Number(dashSplit[0]),
      Number(dashSplit[1]),
      Number(dashSplit[2]),
      Number(colonSplit[0]),
      Number(colonSplit[1]),
      Number(colonSplit[2])
    );
  }
  let date = new Date();
  if (typeof expiration !== "string") date.setDate(date.getDate() + expiration);
  const expires = `expires=${
    typeof expiration !== "string" ? date.toUTCString() : d.toUTCString()
  }`;
  document.cookie = `${name}=${value};${expires}";path=/`;
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
};
