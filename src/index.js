import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/App';
import ScrollToTop from 'src/components/ScrollToTop/scrollToTop';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>
);

const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);
