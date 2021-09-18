import React from 'react'
import { shallow } from 'enzyme'

import ViewUser from '../../components/ViewUser/index'

test('Should render ViewUser correctly', () => {
  const wrapper = shallow(<ViewUser />)
  expect(wrapper).toMatchSnapshot()
})