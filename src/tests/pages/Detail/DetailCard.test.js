import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailCard from '../../../pages/Detail/DetailCard/DetailCard';

test('DetailCard component renders correctly', () => {
  const { getByText, container } = render(
    <DetailCard text="Sample Text" isDark={false} count={42} />,
  );

  const cardElement = container.querySelector('.detail-card');
  const titleLabelElement = getByText('Sample Text');
  const viewsElement = container.querySelector('.detail-card.info');

  expect(cardElement).toBeInTheDocument();
  expect(titleLabelElement).toBeInTheDocument();
  expect(viewsElement).toBeInTheDocument();
});

test('DetailCard component renders a button', () => {
  const { container } = render(
    <DetailCard text="Sample Text" isDark={false} count={42} />,
  );

  const buttonElement = container.querySelector('.detail-card.button');

  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute('type', 'button');
  expect(buttonElement.querySelector('i')).toBeInTheDocument();
});
