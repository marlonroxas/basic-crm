import React from 'react'
import { shallow } from 'enzyme'

import Search from '../../components/Search/index'

test('Should render Search correctly', () => {
  const wrapper = shallow(<Search />)
  expect(wrapper).toMatchSnapshot()
})