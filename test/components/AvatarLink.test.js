import React from 'react';
import { shallow } from 'enzyme';

import { AvatarLink } from '../../app/components/AvatarLink';
import { DEFAULT_AVATAR_LINK_TEXT as testDefaultLinkText } from '../../app/constants/defaults';

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

  describe('with an available Avatar', () => {

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

  describe('without an available Avatar', () => {

    it('displays bold default link text', () => {
      expect(
        shallow(<AvatarLink name={testDefaultLinkText} />).find('strong').text()
      ).toMatch(testDefaultLinkText);
    });

  });

});

describe('AvatarLink getAvatarNameFromId()', () => {

  describe('when an Avatar ID is present in the list', () => {
    xit('selects the correct Avatar name');
  });

  describe('when an Avatar ID is not present in the list', () => {
    xit('selects default Avatar link text');
  });

});
