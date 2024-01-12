import React from 'react';
import { Consumer } from './StoreProviderConsumer';

const withStore = (Component) => {
    const WithStore = (props) => {
        return (
            <Consumer>
                {({ injectReducer = {} } = {}) => <Component {...props} injectReducer={injectReducer} />}
            </Consumer>
        );
    };
    if (Component.initialAction) WithStore.initialAction = Component.initialAction;
    return WithStore;
};
export default withStore;
