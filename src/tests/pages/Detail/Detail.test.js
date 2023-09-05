import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom/extend-expect';
import Detail from '../../../pages/Detail/Detail';

const mockStore = configureStore([thunk]);
// Define mock state
const initialState = {
  classes: {
    classSelected: {
      name: 'Test Class',
      archetypes: [{ name: 'Archetype 1' }, { name: 'Archetype 2' }],
    },
  },
};

test('Detail component renders correctly with class information', async () => {
  const store = mockStore(initialState); // Create a store with the mock state
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Detail />
      </Router>
    </Provider>,
  );

  // Wait for the component to render
  await waitFor(() => {
    const archetypeContainer = container.querySelector('.detail-actions');
    expect(archetypeContainer).toBeInTheDocument();
  });
});

test('Detail component renders archetypes with alternating styles', async () => {
  const store = mockStore(initialState); // Create a store with the mock state
  const { container } = render(
    <Provider store={store}>
      <Router>
        <Detail />
      </Router>
    </Provider>,
  );

  // Wait for the component to render
  await waitFor(() => {
    const archetypeCards = container.querySelectorAll('.detail-card.container');
    expect(archetypeCards).toHaveLength(2);
  });
});
