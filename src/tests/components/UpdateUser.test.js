import React from 'react'
import { shallow } from 'enzyme'

import UpdateUser from '../../components/UpdateUser/index'

test('Should render UpdateUser correctly', () => {
  const wrapper = shallow(<UpdateUser />)
  expect(wrapper).toMatchSnapshot()
})