import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Hero from '../../components/Hero/Hero';

test('Hero component renders with count', () => {
  const { container } = render(<Hero count={42} />);
  const heroCountElement = container.querySelector('.hero-actions');
  expect(heroCountElement).toBeInTheDocument();
});

test('Hero component must not be null', () => {
  const { container } = render(<Hero count={42} />);
  const heroElement = container.querySelector('.hero');
  expect(heroElement).not.toBeNull();
});

test('Hero component contains the brand logo', () => {
  const { container } = render(<Hero count={42} />);
  const logoImage = container.querySelector('.hero-image');
  expect(logoImage).toBeInTheDocument();
});
