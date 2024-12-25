# `html-to-doc-react`

`html-to-doc-react` is a simple React hook that allows you to export HTML content from your React app to a downloadable Word document (.doc). The hook extracts content from either the provided HTML string or from an element with a specified `id`, and generates a Word document with inline styles.

## Features

- Export HTML content or content from a specific element to a Word document.
- Inline styling support, including custom styles applied to your document.
- Simple to use and easy to integrate into React applications.


### Install

You can install the package via npm or yarn:

```bash
# with npm
npm install html-to-doc-react

# with yarn
yarn add html-to-doc-react
```

### Usage

- Import the package in your app:


```js
import React from 'react';
import useExportToDoc from 'html-to-doc-react';

const MyComponent = () => {
    const exportToDoc = useExportToDoc('<p>Hello, World!</p>', null, 'example.doc');

    return (
        <div>
            <button onClick={exportToDoc}>Export to Word</button>
        </div>
    );
};

export default MyComponent;
```

### Props :

- htmlContent (optional): The HTML content you want to export as a Word document.
- elementId (optional): The id of an HTML element from which content will be extracted to export.
- fileName: The name of the Word document you want to generate (including .doc extension).