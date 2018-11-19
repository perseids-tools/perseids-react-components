import React from 'react';
import renderer from 'react-test-renderer';

import PerseidsFooter from './PerseidsFooter';

it('renders with copyright text and default GitHub and Twitter links', () => {
  const tree = renderer.create(<PerseidsFooter />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom GitHub and Twitter links', () => {
  const component = (
    <PerseidsFooter github="https://example.com/github" twitter="https://example.com/twitter" />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can not render GitHub and Twitter links', () => {
  const component = (
    <PerseidsFooter github="" twitter="" />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render report link', () => {
  const component = (
    <PerseidsFooter github="" twitter="" report="https://example.com/github" />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render children between copyright notice and icons', () => {
  const component = (
    <PerseidsFooter>
      Footer text
    </PerseidsFooter>
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});
