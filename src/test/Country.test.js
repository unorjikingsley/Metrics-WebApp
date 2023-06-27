import React from 'react';
import renderer from 'react-test-renderer';
import Country from '../Components/country';

test('should match the snapshot', () => {
  const home = renderer.create(<Country />);
  const tree = home.toJSON();
  expect(tree).toMatchSnapshot();
});
