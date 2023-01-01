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

🔶⚠Very important⚠🔶!!

_just work with array of objects_

```
// ... imports

const array = [{ id: 5 }, { id: 2 }, { id: 3 }, { id: 6 }];

Array.sortBy(array, "id", "asc") ;
// attribute "id" and "asc" are by default

// result
// [ { id: 2 }, { id: 3 }, { id: 5 }, { id: 6 } ]
```

## Browser

_function to get user language_

Hot to use it?

```
import { Browser } from "some-javascript-utils";
// import { getUserLanguage } from "some-javascript-utils";
```

or

```
const { Browser } = "some-javascript-utils";
// const { getUserLanguage } = "some-javascript-utils";
```

#### In Action!

🔶⚠Very important⚠🔶!!

_just work in browsers_

```
// ... imports

const userLang = getUserLanguage();
// if pass a string parameter will save the language to a cookie ()
// example: "en"


```

_function to scroll to position_

Hot to use it?

```

import { Browser } from "some-javascript-utils";
// import { scrollTo } from "some-javascript-utils";

```

or

```

const { Browser } = "some-javascript-utils";
// const { scrollTo } = "some-javascript-utils";

```

#### In Action!

🔶⚠Very important⚠🔶!!

_just work in browsers_

```

// ... imports

// it's obviously how it works
scrollTo(0) // go to top of the page

```

_function to create a cookie_

Hot to use it?

```

import { Browser } from "some-javascript-utils";
// import { createCookie } from "some-javascript-utils";

```

or

```

const { Browser } = "some-javascript-utils";
// const { createCookie } = "some-javascript-utils";

```

#### In Action!

🔶⚠Very important⚠🔶!!

_just work in browsers_

```

// ...imports

const name = "user";
const value = "sito";
const expiration = 765 // count of days or "2019-12-31 23:59:59"
createCookie(name, expiration, value);

// result
// a new cookie in document.cookie = `${name}=${value};${expires}";path=/`;

```

_function to get a cookie value_

Hot to use it?

```

import { Browser } from "some-javascript-utils";
// import { getCookie } from "some-javascript-utils";

```

or

```

const { Browser } = "some-javascript-utils";
// const { getCookie } = "some-javascript-utils";

```

#### In Action!

🔶⚠Very important⚠🔶!!

_just work in browsers_

```

// ...imports

const name = "user";
getCookie(name);

// result
// sito (of previous example)
```

_function to delete a cookie_

Hot to use it?

```

import { Browser } from "some-javascript-utils";
// import { deleteCookie } from "some-javascript-utils";

```

or

```

const { Browser } = "some-javascript-utils";
// const { deleteCookie } = "some-javascript-utils";

```

#### In Action!

🔶⚠Very important⚠🔶!!

_just work in browsers_

```

// ...imports

const name = "user";
deleteCookie(name);

// result
// (document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`);/
```
