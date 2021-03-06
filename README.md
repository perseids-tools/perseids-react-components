# Perseids React Components

This library contains React components that are shared across several Perseids Project applications.

## Demo

[https://perseids-tools.github.io/perseids-react-components/](https://perseids-tools.github.io/perseids-react-components/)

## Installation

`yarn add perseids-react-components`

Note that this package requires the following peer dependencies:

```json
{
  "bootstrap": "^4.1.2",
  "react": "^16.2.0",
  "react-dom": "^16.2.0"
}
```

(See project on [npm](https://www.npmjs.com/package/perseids-react-components))

## Usage

```jsx
import React from 'react';

import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import 'perseids-react-components/build/css/index.css';

const App = () => (
  <div>
    <PerseidsHeader />
    Content
    <PerseidsFooter />
  </div>
);
```

## Development

### Installation

`yarn install`

### Running tests

`yarn test`

### Running demo application

`yarn start`

### Building

`yarn build`

### Publishing

```
yarn build
npm publish
```

(Make sure to update the `version` in `package.json` before publishing a new release.)

## Examples

### PerseidsHeader

#### Default (link to perseids.org)

```jsx
<PerseidsHeader />
```

#### With custom content

```jsx
<PerseidsHeader>
  Header text
</PerseidsHeader>
```

#### With custom logo

```jsx
<PerseidsHeader logo="/images/some-image.png" />
```

#### With no logo

```jsx
<PerseidsHeader logo={null} />
```

#### With custom link component

```jsx
<PerseidsHeader component={Link} props={{ to: '/foo' }} />
```

### PerseidsFooter

#### Default (copyright notice, GitHub, and Twitter links)

```jsx
<PerseidsFooter />
```

#### With custom content

```jsx
<PerseidsFooter>
  Footer text
</PerseidsFooter>
```

#### With report link, custom GitHub link, DOI link, and no Twitter link

```jsx
<PerseidsFooter
  github="https://github.com/perseids-tools/perseids-react-components"
  report="https://github.com/perseids-tools/perseids-react-components/issues"
  doi="https://doi.org/example"
  twitter=""
/>
```

## Upgrading Notes

This library is build on top of [DimiMikadze/create-react-library](https://github.com/DimiMikadze/create-react-library).
To upgrade to the latest version of `create-react-library`:

* In `package.json`, everything above `devDependencies` should not be updated,
  but everything below it should be replaced by the new versions in `create-react-library`.
* Run `yarn add --dev bootstrap prop-types eslint-config-airbnb eslint-plugin-jest react-test-renderer`
* All of the files in `./scripts` should be replaced with new versions in `create-react-library`.
* All of the files in `./config` should be replaced with new versions in `create-react-library`.
* Make script changes in the production Webpack config in accordance with [99542871138040822d9be9cd4ebf1a9ff5b29384](https://github.com/perseids-tools/perseids-react-components/commit/99542871138040822d9be9cd4ebf1a9ff5b29384)
