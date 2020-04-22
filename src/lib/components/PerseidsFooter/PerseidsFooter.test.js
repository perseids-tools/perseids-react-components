import React from 'react';
import renderer from 'react-test-renderer';

import PerseidsFooter from './PerseidsFooter';

it('renders with copyright text and default GitHub and Twitter links', () => {
  const tree = renderer.create(<PerseidsFooter />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders custom copyright notice and  GitHub and Twitter links', () => {
  const component = (
    <PerseidsFooter
      copyright="© Example"
      github="https://example.com/github"
      twitter="https://example.com/twitter"
    />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can not render copyright notice and GitHub and Twitter links', () => {
  const component = (
    <PerseidsFooter copyright="" github="" twitter="" />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render report link', () => {
  const component = (
    <PerseidsFooter github="" twitter="" report="https://example.com/report" />
  );
  const tree = renderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

it('can render DOI link', () => {
  const component = (
    <PerseidsFooter github="" twitter="" doi="https://example.com/doi" />
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
