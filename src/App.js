import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Myapp from './Pages/Myapp'

const intusers = {
  users : 0
};

const reducer = (state = intusers,action) => {
  switch(action.type){
    case 'COMPARE' :
      const list = state;
      list.push(action.user)
      state = list
      return state
    default :
      return state;
  }
  return state
}

const store = createStore(reducer);

const App = () => {
  return(
    <Provider store={store}>
      <Myapp/>
    </Provider>
  );
}

export default App;
