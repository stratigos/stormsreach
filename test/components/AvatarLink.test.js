import React from 'react';
import { shallow } from 'enzyme';

import { AvatarLink } from '../../app/components/AvatarLink';

/**
 * Unit test AvatarLink, to avoid having to import Redux store, or to mock the
 *  Redux store and ActionCreator(s). To do the latter would be more akin to
 *  feature integration testing.
 */
describe('<AvatarLink /> Component', () => {

  /**
   * Capture the shallow render from enzyme.
   */
  let wrapper;

  /**
   * Test values.
   */
  let avatarId, avatarName;

  /**
   * Pass the `Avatar.name` property directly into the element attributes,
   *  rather than deriving it from the data store. This allows for unit testing
   *  of the component in isolation, rather than having to build and mock the
   *  Provider, ActionCreator, `mapStateToProps` function, and any other
   *  dependencies, which is more suitable for integration testing.
   */
  beforeEach(() => {
    avatarId = 64;
    avatarName = 'Lord British';
    wrapper = shallow(<AvatarLink id={avatarId} name={avatarName} />);
  });

  it('is a functional component', () => {
    expect( typeof AvatarLink ).toEqual('function');
  });

  it('renders a link to the Avatar', () => {
    expect( wrapper.find('Link').length ).toEqual(1);
  });

  it('displays the Avatar name', () => {
    expect( wrapper.find('strong').text() ).toBe(avatarName);
  });

});
