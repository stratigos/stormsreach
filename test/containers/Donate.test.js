import React from 'react';
import { render, shallow } from 'enzyme';

import Donate from '../../app/containers/Donate';

describe('<Donate /> Component', () => {

  it('should render a page of static content', () => {
    expect( render(<Donate />) ).toMatchSnapshot();
  });

  it('should render the PayPal Component', () => {
    const testDonate = shallow(<Donate />);

    expect( testDonate.find('PayPalButton').length ).toEqual(1);
  });

  it('should render the Bitcoin Component', () => {
    const testDonate = shallow(<Donate />);

    expect( testDonate.find('BitcoinQRAddress').length ).toEqual(1);
  });

});
