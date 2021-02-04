import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Carrinho from './Components/Carrinho';
import { interfaceStore } from './Types/interfaces'
import Adicionar from './Components/Adicionar';
import Remover from './Components/Remover';

const initialState: interfaceStore = {
  carrinho: 0
}

function reducer(state = initialState, action: any) {
  switch(action.type) {
    case 'ADICIONAR_AO_CARRINHO':
      return {
        carrinho: state.carrinho + 1
      };
      case 'REMOVER_DO_CARRINHO':
        return {
          carrinho: state.carrinho > 0 ? state.carrinho - 1 : state.carrinho
        }
      default:
        return state
  }
}

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Remover />
      <Carrinho />
      <Adicionar />
    </Provider>
  );
}

export default App;
