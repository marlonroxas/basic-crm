import React from 'react'
import { shallow } from 'enzyme'

import DeleteUser from '../../components/DeleteUser/index'

test('Should render DeleteUser correctly', () => {
  const wrapper = shallow(<DeleteUser />)
  expect(wrapper).toMatchSnapshot()
})