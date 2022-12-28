# some-javascript-utils

Some functions to work better with arrays, objects and more!!

# Functions

## Arrays

### sortBy

_function to sort an array_

How to use it?

```
import { Array } from "some-javascript-utils";
// import { sortBy } from "some-javascript-utils/array";
```

or

```
const { Array } from "some-javascript-utils";
// const { sortBy } = require("some-javascript-utils/array");
```

#### In Action!

```
// ... imports

const array = [{ id: 5 }, { id: 2 }, { id: 3 }, { id: 6 }];

Array.sortBy(array, "id", "asc") // attribute "id" and "asc" are by default

// result
// [ { id: 2 }, { id: 3 }, { id: 5 }, { id: 6 } ]
```

#### Source code
🔶⚠Very important⚠🔶!!

_just work with array of objects_

```
/**
 *
 * @param {object[]} array
 * @param {string} attribute
 * @param {boolean} asc
 * @returns
 */
export const sortBy = (array, attribute = "id", asc = false) => {
  return array.sort((itemA, itemB) => {
    if (Number(itemA[attribute]) > Number(itemB[attribute]))
      return !asc ? -1 : 1;
    if (Number(itemA[attribute]) < Number(itemB[attribute]))
      return !asc ? 1 : -1;
    return 0;
  });
};
```
