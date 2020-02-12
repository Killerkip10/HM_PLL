import React from 'react';
import ReactDOM from 'react-dom';
// import { sortBy } from 'lodash';

import { func1 } from './test';

const result = func1(10);

console.log(result);

export const App = () => {
    // const arr = sortBy([
    //     { num: 2 },
    //     { num: 5 },
    //     { num: 1 },
    // ], ['num']);
    //
    // console.log(arr);

    return (<h1>Hello world!!!</h1>);
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);