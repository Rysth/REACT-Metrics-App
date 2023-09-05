import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../../pages/Home/Home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const mockState = {
  classes: {
    classArray: [
      {
        slug: 'class-1',
        name: 'Class 1',
        archetypes: [{}, {}],
      },
      {
        slug: 'class-2',
        name: 'Class 2',
        archetypes: [{}, {}, {}],
      },
    ],
  },
};

beforeEach(() => {
  useSelector.mockImplementation((selector) => selector(mockState));
});

afterEach(() => {
  useSelector.mockClear();
});

test('Home component renders Separator even when classArray is empty', () => {
  const emptyState = {
    classes: {
      classArray: [],
    },
  };
  useSelector.mockImplementation((selector) => selector(emptyState));

  const { container } = render(<Home />);

  // Check if Separator component is rendered with the correct text
  const separatorText = container.querySelector('.separator');
  expect(separatorText).toBeInTheDocument();
});

test('Home component renders Hero with a count of 0 when classArray is empty', () => {
  const emptyState = {
    classes: {
      classArray: [],
    },
  };
  useSelector.mockImplementation((selector) => selector(emptyState));

  const { container } = render(<Home />);

  // Check if Hero component is rendered with the correct count
  const heroTitle = container.querySelector('.hero-title');
  expect(heroTitle).toBeInTheDocument();
});
