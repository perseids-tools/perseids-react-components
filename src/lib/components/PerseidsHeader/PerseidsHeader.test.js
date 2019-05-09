import React from 'react';
import renderer from 'react-test-renderer';

import PerseidsHeader from './PerseidsHeader';

it('renders with a link to perseids.org', () => {
  const tree = renderer.create(<PerseidsHeader />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render a different element', () => {
  const component = (
    <PerseidsHeader component="div" />
  );

  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render a custom component', () => {
  const MyComponent = ({ className, name, children }) => (
    <span className={className} name={name}>
      {children}
    </span>
  );
  const component = (
    <PerseidsHeader component={MyComponent} props={{ name: 'test' }} />
  );

  const tree = renderer.create(component).toJSON();

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
