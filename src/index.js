import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './routers/App';

const rootElement = document.getElementById('app');

const root = createRoot(rootElement);
root.render(<App />);

/* ReactDOM.render(<App />, document.getElementById("app")); */
