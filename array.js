/**
 *
 * @param {object[]} array
 * @param {string} attribute
 * @param {boolean} asc
 * @returns
 */
const sortBy = (array, attribute = "id", asc = false) => {
  return array.sort((itemA, itemB) => {
    if (Number(itemA[attribute]) > Number(itemB[attribute]))
      return !asc ? -1 : 1;
    if (Number(itemA[attribute]) < Number(itemB[attribute]))
      return !asc ? 1 : -1;
    return 0;
  });
};

module.exports = {
  sortBy,
};
