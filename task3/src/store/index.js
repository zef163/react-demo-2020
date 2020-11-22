import {configureStore} from '@reduxjs/toolkit';

import reducer from 'reducers';

export default configureStore({
    reducer,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
});
