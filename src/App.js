// import { Fragment } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Header from './components/Header/Header';
import Goals from './components/Goals/Goals';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Goals />
    </Provider>
  );
}

export default App;
