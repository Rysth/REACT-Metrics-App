import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Card from '../../components/Card/Card';

test('Card component snapshot', () => {
  const { container } = render(
    <Router>
      <Card
        slug="example-slug"
        title="Example Title"
        count={42}
        imageSource="example-image.jpg"
      />
    </Router>,
  );
  expect(container).toMatchInlineSnapshot(`
<div>
  <div
    style="opacity: 0;"
  >
    <a
      class="card bg-primary-blue"
      href="/class/example-slug"
    >
      <img
        alt=""
        class="card-image"
        src="example-image.jpg"
      />
      <div
        class="card-actions"
      >
        <button
          class="card-button"
          type="button"
        >
          <i
            class="fa-solid fa-circle-arrow-right"
          />
        </button>
      </div>
      <div
        class="card-data"
      >
        <h3
          class="card-title"
        >
          Example Title
        </h3>
        <p
          class="card-count"
        >
          42
        </p>
      </div>
    </a>
  </div>
</div>
`);
});

test('Card component is in the document', () => {
  const { container } = render(
    <Router>
      <Card
        slug="example-slug"
        title="Example Title"
        count={42}
        imageSource="example-image.jpg"
      />
    </Router>,
  );

  expect(container.querySelector('.card')).toBeInTheDocument();
});

test('Props should not be null', () => {
  const { getByText } = render(
    <Router>
      <Card
        slug="example-slug"
        title="Example Title"
        count={42}
        imageSource="example-image.jpg"
      />
    </Router>,
  );

  expect(getByText('Example Title')).not.toBeNull();
  expect(getByText('42')).not.toBeNull();
});
