import {test} from 'picomatch';
import React from 'react';
import {render} from '@testing-library/react-native';
import CinemaScreen from '../screens/Cinema';
import Loader from '../components/Loader';

test('renders a loading component initially', () => {
  const {getByTestId} = render(<Loader />);
  expect(getByTestId('loader'));
});

test('renders Flat List with data', () => {
  const {getByTestId} = render(<CinemaScreen />);
  expect(getByTestId('Movies-rows'));
});

//   test('render message that no results found if empty array returned');
