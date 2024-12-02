# html-to-doc-react

A custom React hook for exporting HTML content to Word document files.

## Installation

Install the package via npm:

```bash
npm install html-to-doc-react

Usage- 

Here’s how to use the hook in your React component:

import React from 'react';
import useExportToDoc from 'use-export-to-doc';

const MyComponent = () => {
    const exportToDoc = useExportToDoc('<p>Hello, World!</p>', null, 'example.doc');

    return (
        <div>
            <button onClick={exportToDoc}>Export to Word</button>
        </div>
    );
};

export default MyComponent;

