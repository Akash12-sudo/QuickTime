import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </Provider>
  </StrictMode>
);
