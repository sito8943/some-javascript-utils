/**
 *
 * @param {object[]} array
 * @param {string} attribute
 * @param {boolean} asc
 * @param {func} auxFunction
 * @returns
 */
const sortBy = (array, attribute = "id", asc = false, auxFunction) => {
  return array.sort((itemA, itemB) => {
    if (auxFunction) {
      console.assert(
        auxFunction(itemA[attribute]) !== undefined,
        "auxFunction should return something"
      );
      if (auxFunction(itemA) > auxFunction(itemB)) return !asc ? -1 : 1;
      if (auxFunction(itemA) < auxFunction(itemB)) return !asc ? 1 : -1;
      return 0;
    } else {
      if (itemA[attribute] > itemB[attribute]) return !asc ? -1 : 1;
      if (itemA[attribute] < itemB[attribute]) return !asc ? 1 : -1;
      return 0;
    }
  });
};

module.exports = {
  sortBy,
};
