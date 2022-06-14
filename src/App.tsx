import type { Component } from 'solid-js';

import PickColor from './components/PickColor/PickColor';

const App: Component = () => {
  return (
    <div class="container">
      <PickColor />
    </div>
  );
};

export default App;
