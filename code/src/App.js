import React from 'react';

import data from './data.json';
import Header from './components/Header.js';
import { NewsList } from './components/NewsList.js';

console.log(data);

export const App = (props) => {
  return (
      <section>
      <Header title="Students seem to like React" />
      <NewsList articlesList={data} />
      </section>
  );
}
