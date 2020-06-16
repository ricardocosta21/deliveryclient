import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import ItemsPage from '../index';

describe('<ItemsPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ItemsPage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
