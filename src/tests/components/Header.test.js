import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/Store';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../components/Header/Header';

test('Header component snapshot', () => {
  const { container } = render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>,
  );
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="header bg-primary-blue-dark"
    style="opacity: 0;"
  >
    <div
      class="header-content container"
    >
      <button
        class="header-button"
        type="button"
      >
        <i
          class="fa-solid fa-chevron-left"
        />
        RysthCraft
      </button>
      <p>
        Dungeons & Dragons
      </p>
      <div
        class="header-actions"
      >
        <i
          class="fa-solid fa-microphone"
        />
        <i
          class="fa-solid fa-gear"
        />
      </div>
    </div>
  </div>
</div>
`);
});

test('Header component is in the document', () => {
  const { container } = render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>,
  );

  expect(container.querySelector('.header')).toBeInTheDocument();
});

test('Header Button is in the document', () => {
  const { container } = render(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>,
  );

  expect(container.querySelector('.header-button')).toBeInTheDocument();
});
