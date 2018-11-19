import React from 'react';
import renderer from 'react-test-renderer';

import PerseidsHeader from './PerseidsHeader';

it('renders with a link to perseids.org', () => {
  const tree = renderer.create(<PerseidsHeader />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render children between copyright notice and icons', () => {
  const component = (
    <PerseidsHeader>
      Header text
    </PerseidsHeader>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
