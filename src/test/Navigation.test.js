import React from 'react';
import renderer from 'react-test-renderer';
import Nav from '../Components/Navigation';

test('should match the snapshot', () => {
  const home = renderer.create(<Nav />);
  const tree = home.toJSON();
  expect(tree).toMatchSnapshot();
});
