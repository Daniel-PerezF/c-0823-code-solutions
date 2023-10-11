/* eslint-disable no-unused-vars */

// import from a file located at the absolute path `/foo/bar/baz/qux.js`:
// eslint-disable-next-line import/no-absolute-path
// import f1 from 'fixme1';
import f1 from '../../../foo/bar/baz/qux.js';

// import from a file named `foo.json` located in the current directory:
// import f2 from 'fixme2';
import f2 from './foo.json';

// import from a file named `bar.js` located in the parent directory:
// import f3 from 'fixme3';
import f3 from '../../bar.js';

// import from a file named `index.js` located in a directory named `baz` that
// is in the current directory:
// import f4 from 'fixme4';
import f4 from './baz/index.js';

// import from a file named `index.js` located in a directory named `baz` that
// is in the parent directory:
// import from 'fixme5';
import f5 from '../index.js';

// import from an `npm` module named `react`:
// import f6 from 'fixme6';
import f6 from 'module/npm/react';
