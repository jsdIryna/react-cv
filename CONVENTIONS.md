## CASES CONVENTION

We use the next cases:

- for folders and files - **Kebab case**

```
└── components                <--
    ├── footer.js             <--
    └── authenticated-app.js  <--
└── util                      <--
    ├── dates.js              <--
    └── compose-refs.js       <--
└── README.md
```

- for components naming - **Paskal case**

```
const MyAwesomeComponent = () => {
  //...your code to execute here
}
```

- for utils/helpers naming - **Camel case**

```
const myHelper = () => {
  //...your code to execute here
}
```

- for styles const naming - **Camel case**

```
const myStylesConfig = {
  //...your styles to be described here
}
```

- for constants naming - mixed - **Screaming snake case**

```
const MY_CONSTANT = 1
```

- for images/icons naming - **Kebab case**

```
import SortIcon from 'assets/icons/sort-icon.svg';
```

- for .md files - **Screaming case**

```
├── components
├── CONVENTIONS.md            <--
└── README.md                 <--
```

## MODULES' IMPORT CONVENTION

Every module should be build following these rules:

- imports should be **divided to several blocks**
- import blocks should be **separated with blank string**
- import blocks **priority should be the next:**
  1. imports with external modules
  2. imports for components
  3. imports for api
  4. imports for state managing/security
  5. imports for helpers/utils
  6. imports for data/constants
  7. imports for assets
  8. imports for css
