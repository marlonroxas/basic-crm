import React from 'react'
import { shallow } from 'enzyme'

import DataTable from '../../components/DataTable/index'

test('Should render DataTable correctly', () => {
  const wrapper = shallow(<DataTable />)
  expect(wrapper).toMatchSnapshot()
})