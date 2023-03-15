/**
 *
 * @param {object[]} array
 * @param {string} attribute
 * @param {boolean} asc
 * @returns
 */
const sortBy = (array, attribute = "id", asc = false) => {
  return array.sort((itemA, itemB) => {
    if (itemA[attribute] > itemB[attribute])
      return !asc ? -1 : 1;
    if (itemA[attribute] < itemB[attribute])
      return !asc ? 1 : -1;
    return 0;
  });
};

module.exports = {
  sortBy,
};
