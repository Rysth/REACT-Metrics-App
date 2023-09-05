import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Separator from '../../components/Separator/Separator';

test('Separator component renders with a h2 tag', () => {
  const { container } = render(<Separator text="Welcome World!" />);
  const separatorTitle = container.querySelector('.separator-title');
  expect(separatorTitle).toBeInTheDocument();
});

test('Separator component must be not null', () => {
  const { container } = render(<Separator text="Welcome World!" />);
  const separatorElement = container.querySelector('.separator');
  expect(separatorElement).not.toBeNull();
});

test('Separator component contains the Welcome World! text', () => {
  const { getByText } = render(<Separator text="Welcome World!" />);
  const separatorTitle = getByText('Welcome World!');
  expect(separatorTitle).toBeInTheDocument();
});
