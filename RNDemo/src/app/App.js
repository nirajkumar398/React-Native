import React from 'react';
import {Provider} from 'react-redux';
import {getComponentAndReducer} from './getComponentAndReducer';
import { Provider as StoreProvider } from './commonComponents/HOC/StoreConsumer/StoreProviderConsumer';

const App = props => {
  const {Component, store} = getComponentAndReducer(props.key_id);
  return (
    <Provider store={store}>
      <StoreProvider injectReducer={store.injectReducer}>
        <Component {...props} />
      </StoreProvider>
    </Provider>
  );
};

export default App;
