import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider }from '@chakra-ui/react';
import theme from './Theme';
import { store } from './redux/store';
import {Provider} from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
      <Provider store={store}>
       <App />
       </Provider>
    </ChakraProvider>
  </React.StrictMode>
);


