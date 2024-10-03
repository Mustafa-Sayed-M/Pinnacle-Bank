import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Clerk:
import { ClerkProvider } from '@clerk/clerk-react';

// Redux:
import { Provider } from 'react-redux';
import { store } from './Store/store';

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";
import { HashRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={process.env.REACT_APP_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
    >
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </ClerkProvider>
  </React.StrictMode>
);

reportWebVitals();